import React, { useState, useEffect } from 'react';
import MemeCard from '../components/meme-card/MemeCard';
import http from '../../../services/http';

export default function ViewMeme(props) {
    console.log(props)
    const [meme, setMeme] = useState(null)

    useEffect(() => {
      http.Social.getMeme().then(res=>console.log(res))
    },[]);

    console.log(meme)

    return (
        <div className="main-container">
            <h1>View Meme</h1>
            {/* <MemeCard /> */}
        </div>
    );
};