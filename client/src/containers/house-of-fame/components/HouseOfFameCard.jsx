import React from 'react';
import gameRank from '../../../assets/img/game_rank.png';
import secondsToClock from '../../../utils/secondsToClock';

export default function HouseOfFameCard(props) {
    return (
        <div className="list-card-container">
            <div>
                <img src={gameRank} alt="Rank" />
            </div>

            <div>
                <span><b>Username: {props.data.user.username}</b></span>
                <div className="list-card-stats">
                    <div>
                        <p><b>Games Played: {props.data.totalGames}</b></p>
                    </div>
                    <div>
                        <p><b>Time Played: {secondsToClock(props.data.totalTime)}</b></p>
                    </div>
                    <div>
                        <p><b>Gold Accumulated: {props.data.totalGold}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};