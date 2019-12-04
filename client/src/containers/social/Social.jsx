import React from 'react';
import MemeCard from '../../components/meme-card/MemeCard';

export default function Social() {
    return (
        <div className="social-container">

            <div className="social-add-meme">
                <button type="button">Add Meme</button>
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