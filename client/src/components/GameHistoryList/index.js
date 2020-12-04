import { Fragment } from 'react';
import secondsToClock from '../../utils/secondsToClock';
import { currentPage } from '../../utils/currentPage';
import { numberGenerator } from '../../utils/numberGenerator';
import gameRank from '../../assets/images/game_rank.png';

export default function GameHistoryList(props) {
    const content = props.content;
    const currentUrl = currentPage();

    function getOrder() {
        let map;
        const card = (data, index) => (
            <li key={index} className="game-history-card">
                <div className="image-wrapper">
                    <img src={gameRank} alt="Rank" />
                </div>

                <div className="statistics-wrapper">{getStatistics(data)}</div>
            </li>
        );

        switch (currentUrl) {
            case 'profile':
                map = content
                    .slice(0)
                    .reverse()
                    .map((data, index) => {
                        return card(data, index);
                    });
                break;
            case 'house-of-fame':
                map = content
                    .sort((a, b) => {
                        return b.totalGames - a.totalGames;
                    })
                    .map((data, index) => {
                        return card(data, index);
                    });
                break;
            default:
                break;
        }

        return map;
    }

    function getStatistics(content) {
        let statistics;

        switch (currentUrl) {
            case 'profile':
                statistics = (
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
                statistics = (
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

        return statistics;
    }

    return <ul className="game-history-component">{content && getOrder()}</ul>;
}
