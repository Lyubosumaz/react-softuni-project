import React from 'react';
import defaultProfilePic from '../../assets/default_profile.png';
import './profile.css';
import GameHistoryCard from '../../components/game-history-card/GameHistoryCard';

export default function Profile() {
    return (
        <div className="profile-container">
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

        </div >
    );
}