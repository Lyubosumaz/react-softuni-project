import { useState, useRef, useCallback } from 'react';
import { handleRoute } from '../../utils/history';
import MemeCard from '../MemeCard';
import useMemePage from './useMemePage';
import { componentData } from '../../class-names.json';

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
        <section className={`${componentData}`}>
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

            <ul className="memes-list-container">
                {memes &&
                    memes.map((meme, index) => {
                        if (memes.length === index + 1) {
                            return (
                                <li key={meme.index} ref={lastMemeCardRef}>
                                    <MemeCard num={index} meme={meme} />
                                </li>
                            );
                        } else {
                            return (
                                <li key={meme.index}>
                                    <MemeCard num={index} meme={meme} />
                                </li>
                            );
                        }
                    })}
            </ul>
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </section>
    );
}
