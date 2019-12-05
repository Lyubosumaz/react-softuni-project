import React from 'react';
import history from '../../services/history';
import './house-of-fame.css';

export default function HouseOfFame() {

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    };

    return (
        <div className="house-of-fame-container">
            <h1>House of Fame</h1>
            <p className="house-of-fame-search-p"><b>Find your player: </b><input type="text" className="mySearch" onkeyup="myFunction()" placeholder="Search.."></input></p>
            <div className="form-info-container">
                <p>Join the race and climb to the top <button className="form-info-button" onClick={handleRoute('/login')}>Sign in</button>!</p>
            </div>
        </div>
    );
}