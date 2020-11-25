import { Fragment } from 'react';
import secondsToClock from '../../utils/secondsToClock';
import { currentPage } from '../../utils/currentPage';
import numberGenerator from '../../utils/numberGenerator';
import gameRank from '../../assets/images/game_rank.png';

export default function GameHistoryCard(props) {
    const content = props.data;
    let card;

    switch (currentPage()) {
        case 'profile':
            card = (
                <Fragment key={numberGenerator()}>
                    <header className="statistics-header">
                        <h2>Level: {content.level}</h2>
                    </header>

                    <div className="statistics-main">
                        <p>
                            Your time is:<span>{secondsToClock(content.time)}</span>
                        </p>
                        <p>
                            Collected gold:<span>{content.gold}</span>
                        </p>
                        <p>
                            Loot:<span>{content.loot}</span>
                        </p>
                    </div>
                </Fragment>
            );
            break;
        case 'house-of-fame':
            card = (
                <Fragment key={numberGenerator()}>
                    <header className="statistics-header">
                        <h2>Username: {content.user.username}</h2>
                    </header>

                    <div className="statistics-main">
                        <p>
                            Games Played:<span>{content.totalGames}</span>
                        </p>
                        <p>
                            Time Played:<span>{secondsToClock(content.totalTime)}</span>
                        </p>
                        <p>
                            Wealth:<span>{content.totalGold} coins</span>
                        </p>
                    </div>
                </Fragment>
            );
            break;
        default:
            break;
    }

    return (
        <li className="game-history-card">
            <div className="image-wrapper">
                <img src={gameRank} alt="Rank" />
            </div>

            <div className="statistics-wrapper">{card}</div>
        </li>
    );
}
