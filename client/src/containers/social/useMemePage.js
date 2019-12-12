import { useEffect, useState } from 'react';
import http from '../../services/http';

export default function useMemePage(pageNumber) {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        http.Social.getScroll({
            pageNumber,
            itemNumber: 5
        })
            .then((m) => {
                setMemes([...memes, ...m]);
                setHasMore(m.length > 0);
                setLoading(false);
            }).catch(() => {
                setError(true);
            })
    }, [pageNumber]);

    return { memes, loading, error, hasMore };
};
