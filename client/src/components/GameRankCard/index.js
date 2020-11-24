import { Fragment } from 'react';
import secondsToClock from '../../utils/secondsToClock';
import { currentPage } from '../../utils/currentPage';
import numberGenerator from '../../utils/numberGenerator';
import gameRank from '../../assets/images/game_rank.png';

export default function GameRankCard(props) {
    const content = props.data;
    let card;

    switch (currentPage()) {
        case 'profile':
            card = (
                <Fragment key={numberGenerator()}>
                    <span>Level: {content.level}</span>

                    <div className="list-card-stats">
                        <p>Your time is: {secondsToClock(content.time)}</p>
                        <p>Collected gold: {content.gold}</p>
                        <p>Loot: {content.loot}</p>
                    </div>
                </Fragment>
            );
            break;
        case 'house-of-fame':
            card = (
                <Fragment key={numberGenerator()}>
                    <span>Username: {content.user.username}</span>

                    <div className="list-card-stats">
                        <p>Games Played: {content.totalGames}</p>
                        <p>Time Played: {secondsToClock(content.totalTime)}</p>
                        <p>Wealth: {content.totalGold} coins</p>
                    </div>
                </Fragment>
            );
            break;
        default:
            break;
    }

    return (
        <div className="list-card-container">
            <div>
                <img src={gameRank} alt="Rank" />
            </div>
            <div>{card}</div>
        </div>
    );
}
