import React from 'react';
import GameHistoryCard from './game-history-card/GameHistoryCard';
import handleRoute from '../../utils/handleRoutes';
import defaultProfilePic from '../../assets/img/default_profile.png';
import './profile.css';

export default function Profile() {
    return (
        <div className="main-container">
            <h1>Profile</h1>

            <div className="profile-card">
                <h1>John Doe</h1>
                <img src={defaultProfilePic} alt="" />
                <p><b>Total played games: 0</b></p>
                <p><b>Total played time: 0</b></p>
                <p><b>Total gold: 0</b></p>
            </div>

            <div className="profile-game-history">
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
            </div>

            <div className="info-container">
                <p>Play one more game <button className="info-button" onClick={handleRoute('/game')}>Here</button>!</p>
            </div>
        </div >
    );
};