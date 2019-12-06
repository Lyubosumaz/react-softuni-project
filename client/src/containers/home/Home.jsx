import React from 'react';
import handleRoute from '../../utils/handleRoutes';
import './home.css';

export default function Home() {
    return (
        <div className="background-image-container" name="home">
            <h1>Home</h1>
            <div className="info-container">
                <p>Join our social media <button className="info-button" onClick={handleRoute('/login')}>Sign in</button>.</p>
            </div>
        </div>
    );
};