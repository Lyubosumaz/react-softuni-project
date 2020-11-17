import { useState, useRef, useCallback } from 'react';
import { handleRoute } from '../../utils/history';
import MemeCard from './components/meme-card/MemeCard';
import useMemePage from './useMemePage';
import Title from '../../components/title/Title';
import Info from '../../components/info/Info';

export default function Social() {
    const [pageNumber, setPageNumber] = useState(1);
    const { memes, loading, error, hasMore } = useMemePage(pageNumber);

    const observer = useRef();
    const lastMemeCardRef = useCallback(
        (node) => {
            if (loading) {
                return;
            }

            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entires) => {
                if (entires[0].isIntersecting && hasMore) {
                    setPageNumber(pageNumber + 1);
                }
            });

            if (node) {
                observer.current.observe(node);
            }
        },
        [loading, hasMore, pageNumber]
    );

    return (
        <div className="social-container">
            <Title type={'component'} />

            <div>
                <button className="active-button" onClick={handleRoute('/404')}>
                    Create Meme
                </button>
            </div>
            <div>
                <button className="active-button" onClick={handleRoute('/social/add-meme')}>
                    Add Meme
                </button>
            </div>

            <h1>Memes</h1>

            <div className="memes-container">
                {memes.map((meme, index) => {
                    if (memes.length === index + 1) {
                        return (
                            <div key={meme.index} ref={lastMemeCardRef}>
                                <MemeCard meme={meme} />
                            </div>
                        );
                    } else {
                        return (
                            <div key={meme.index}>
                                <MemeCard meme={meme} />
                            </div>
                        );
                    }
                })}
            </div>
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>

            <Info />
        </div>
    );
}
