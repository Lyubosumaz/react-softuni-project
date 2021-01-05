import { useState, useRef, useCallback } from 'react';
import MemeCard from '../MemeCard';
import useMemePage from './useMemePage';
import { componentData } from '../../class-names.json';
import { factoryButtons } from '../../utils/factory';

export default function Social() {
    const [pageNumber, setPageNumber] = useState(1);
    const { memes, loading, error, hasMore } = useMemePage(pageNumber);

    const socialAttributes = { buttonStyles: 'social-action-btn' };
    const initializedSocialBtn = factoryButtons(socialAttributes);

    // NEED TO REWORK THE MEMECARD COMPONENT HERE IT FORCES RERENDERING
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
                {initializedSocialBtn('404', 'Create Meme') /* TODO not present functionality*/}
                {initializedSocialBtn('social/add-meme', 'Add Meme')}
            </div>

            <h1 className={`secund-header`}>Memes</h1>

            <ul className="memes-list-container">
                {memes &&
                    memes.map((meme, index) => {
                        if (memes.length === index + 1) {
                            return (
                                <li key={index} ref={lastMemeCardRef}>
                                    <MemeCard num={index} meme={meme} />
                                </li>
                            );
                        } else {
                            return (
                                <li key={index}>
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
