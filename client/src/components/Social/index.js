import { useState, useRef, useCallback } from 'react';
import MemeCard from '../MemeCard';
import Button from '../Button';
import useMemePage from './useMemePage';
import { componentData } from '../../class-names.json';

export default function Social() {
    const [pageNumber, setPageNumber] = useState(1);
    const { memes, loading, error, hasMore } = useMemePage(pageNumber);

    const renders = useRef(0);
    console.log('times was rendered: ', renders.current++);

    // useEffect(() => {
    /* Fetch All Memes */
    // httpSocial
    //     .getAllMemes()
    //     .then((allMemes) => {
    //         setMemes(allMemes);
    //     })
    //     .catch((err) => console.warn(err));
    // }, []);

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
            <div className="social-action">
                <Button additionalClassName="social-action-btn" buttonText="Create Meme" direction="404" />
                <Button additionalClassName="social-action-btn" buttonText="Add Meme" direction="social/add-meme" />
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
