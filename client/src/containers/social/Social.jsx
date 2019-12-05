import React from 'react';
import MemeCard from './meme-card/MemeCard';
import history from '../../services/history';
import './social.css';

export default function Social() {

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    };

    return (
        <div className="social-container">

            <div >
                <button className="social-add-meme-button" onClick={handleRoute('/social/add-meme')}>Add Meme</button>
            </div>

            <div className="memes-container">
                <MemeCard />
                <MemeCard />
                <MemeCard />
                <MemeCard />
                <MemeCard />
                <MemeCard />
                <MemeCard />
                <MemeCard />
                <MemeCard />
                <MemeCard />
            </div>

        </div>
    );
};