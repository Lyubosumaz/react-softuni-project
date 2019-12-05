import React from 'react';
import handleRoute from '../../utils/handleRoutes';
import './about.css';

export default function About() {
    return (
        <div className="background-image-container">
            <h1>About</h1>
            <div className="form-info-container">
                <p>Join our social media <button className="form-info-button" onClick={handleRoute('/login')}>Sign in</button>.</p>
            </div>
        </div>
    );
};