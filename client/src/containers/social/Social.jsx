import React from 'react';
import MemeCard from './components/meme-card/MemeCard';
import handleRoute from '../../utils/handleRoutes';
import './social.css';

export default function Social() {
    return (
        <div className="container">
             <h1>Social</h1>

            <div >
                <button className="active-button" onClick={handleRoute('/social/add-meme')}>Add Meme</button>
            </div>

            <h1>Memes</h1>

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

            <div className="info-container">
                <p>Join the race and climb to the top <button className="info-button" onClick={handleRoute('/game')}>Here</button>!</p>
            </div>
        </div>
    );
};