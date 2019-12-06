import React from 'react';
import handleRoute from '../../utils/handleRoutes';
import './house-of-fame.css';

export default function HouseOfFame() {
    return (
        <div className="container">
            <h1>House of Fame</h1>
            <p className="house-of-fame-search-p"><b>Find your player: </b><input type="text" className="my-search" placeholder="Search.."></input></p>
            <div className="info-container">
                <p>Join the race climb ladder and be the apex legend <button className="info-button" onClick={handleRoute('/login')}>Sign in</button>!</p>
            </div>
        </div>
    );
};