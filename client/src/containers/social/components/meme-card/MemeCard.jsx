import React from 'react';
import './meme-card.css';

export default function MemeCard(props) {
    // console.log(props)
    return (
        <div className="meme-card">
            <h1>{props.title}</h1>

            <div>
                <button className='meme-card-button'>View</button>
                <button className='meme-card-button'>Edit</button>
                <button className='meme-card-button'>Delete</button>
            </div>
            
            <div>
                <img src={props.imageUrl} alt={props.title} />
            </div>
        </div>
    );
};