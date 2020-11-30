import { useState, useRef, useCallback, useEffect, Fragment } from 'react';
import { handleRoute } from '../../utils/history';
import MemeCard from '../MemeCard';
// import useMemePage from './useMemePage';
import { componentData } from '../../class-names.json';
import { httpSocial } from '../../services/http';
import Button from '../Button';

export default function Social() {
    // const [pageNumber, setPageNumber] = useState(1);
    // const { memes, loading, error, hasMore } = useMemePage(pageNumber);

    const [memes, setMemes] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
    // const [hasMore, setHasMore] = useState(false);

    const renders = useRef(0);
    console.log('times was rendered: ', renders.current++);

    useEffect(() => {
        httpSocial
            .getAllMemes()
            .then((allMemes) => {
                setMemes(allMemes);
            })
            .catch((err) => console.warn(err));
        //     setLoading(true);
        //     setError(false);
        //     httpSocial
        //         .getScroll({
        //             pageNumber,
        //             itemNumber: 5,
        //         })
        //         .then((m) => {
        //             setMemes((memes) => [...memes, ...m]);
        //             setHasMore(m.length > 0);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setError(true);
        //         });
    }, []);

    // const observer = useRef();
    // const lastMemeCardRef = useCallback(
    //     (node) => {
    //         if (loading) {
    //             return;
    //         }

    //         if (observer.current) {
    //             observer.current.disconnect();
    //         }

    //         observer.current = new IntersectionObserver((entires) => {
    //             if (entires[0].isIntersecting && hasMore) {
    //                 setPageNumber(pageNumber + 1);
    //             }
    //         });

    //         if (node) {
    //             observer.current.observe(node);
    //         }
    //     },
    //     [loading, hasMore, pageNumber]
    // );

    return (
        <Fragment>
            {/* <section className={`${componentData}`}> */}
            <div>
                <Button additionalClassName="active-button" buttonText="Create Meme" direction="404" />
            </div>
            <div>
                <Button additionalClassName="active-button" buttonText="Add Meme" direction="social/add-meme" />
            </div>

            <h1>Memes</h1>

            <ul className="memes-list-container">
                {memes &&
                    memes.map((meme, index) => {
                        if (memes.length === index + 1) {
                            return (
                                <li
                                    key={meme.index}
                                    // ref={lastMemeCardRef}
                                >
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
            {/* <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </section> */}
        </Fragment>
    );
}
