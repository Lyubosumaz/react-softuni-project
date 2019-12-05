import React from 'react';
import './game-history-card.css';

export default function GameHistoryCard() {
    return (
        <div class="game-history-container">
            <img src="bandmember.jpg" alt="Avatar" />
            <span>Level 1</span>
            <p>Your time is: 54 </p>
            <p>Gold collected: 9</p>
            <p>Loot: 'Sandals of the Saint'</p>
        </div>
    );
};