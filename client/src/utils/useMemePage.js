import { useEffect, useState } from 'react';
import http from '../services/http';

export default function useMemePage(query, pageNumber) {

    useEffect(() => {

        http.Social.getAll().then()

    }, [query, pageNumber]);
    return hull;
};