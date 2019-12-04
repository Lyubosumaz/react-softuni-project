import { useEffect, useState } from 'react';

export default function useMemePage(query, pageNumber) {

    useEffect(() => {
        fetch({
            method: 'GET',
            url: 'http://localhost:4000/api/user/social'
        })

    }, [query, pageNumber]);
    return hull;
};