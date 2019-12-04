import React from 'react';
import './meme-card.css';

export default function MemeCard() {
    return (
        <div className="meme-card">
            <h1>Tailored Jeans</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png" />
            <button className='meme-card-button'>View</button>
        </div>
    );
};