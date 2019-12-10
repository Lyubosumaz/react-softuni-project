import React from 'react';
import gameRank from '../../../../assets/img/game_rank.png';

export default function GameHistoryCard(props) {
    return (
        <div className="list-card-container">
            <div>
                <img src={gameRank} alt="Rank" />
            </div>

            <div>
                <span><b>Level: {props.data.level}</b></span>
                <div className="list-card-stats">
                    <div>
                        <p><b>Your time is: {props.data.time}</b></p>
                    </div>
                    <div>
                        <p><b>Collected gold: {props.data.gold}</b></p>
                    </div>
                    <div>
                        <p><b>Loot: {props.data.loot}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};