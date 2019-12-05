import React from 'react';
import MemeCard from './meme-card/MemeCard';
import handleRoute from '../../utils/handleRoutes';
import './social.css';

export default function Social() {


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