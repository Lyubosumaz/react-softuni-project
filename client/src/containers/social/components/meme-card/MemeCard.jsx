import React from 'react';
import handleRoute from '../../../../utils/handleRoutes';
import './meme-card.css';

export default function MemeCard(props) {
    return (
        <div className="meme-card">
            <h1>{props.meme.title}</h1>

            <div>
                <button className="meme-card-button" onClick={handleRoute(`/social/view-meme/:${props.meme._id}`)}>View</button>
                <button className="meme-card-button" onClick={handleRoute(`/social/edit-meme/:${props.meme._id}`)}>Edit</button>
                <button className="meme-card-button" onClick={handleRoute(`/social/delete-meme/:${props.meme._id}`)}>Delete</button>
            </div>

            <div>
                <img src={props.meme.imageUrl} alt={props.meme.title} />
            </div>
        </div>
    );
};