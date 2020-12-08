import { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { secondsToClock } from '../../utils/secondsToClock';
import { currentPage } from '../../utils/currentPage';
import { numberGenerator } from '../../utils/numberGenerator';
import gameRank from '../../assets/images/game_rank.png';

export default function GameHistoryList({ content }) {
    const memeContent = content;
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
                map = memeContent
                    .slice(0)
                    .reverse()
                    .map((data, index) => {
                        return card(data, index);
                    });
                break;
            case 'house-of-fame':
                map = memeContent
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

    function getStatistics(memeContent) {
        let statistics;

        switch (currentUrl) {
            case 'profile':
                statistics = (
                    <Fragment key={numberGenerator()}>
                        <header className="statistics-header">
                            <h2>Level: {memeContent.level}</h2>
                        </header>

                        <div className="statistics-main">
                            <p>
                                Your time is:<span>{secondsToClock(memeContent.time)}</span>
                            </p>
                            <p>
                                Collected gold:<span>{memeContent.gold}</span>
                            </p>
                            <p>
                                Loot:<span>{memeContent.loot}</span>
                            </p>
                        </div>
                    </Fragment>
                );
                break;
            case 'house-of-fame':
                statistics = (
                    <Fragment key={numberGenerator()}>
                        <header className="statistics-header">
                            <h2>Username: {memeContent.user.username}</h2>
                        </header>

                        <div className="statistics-main">
                            <p>
                                Games Played:<span>{memeContent.totalGames}</span>
                            </p>
                            <p>
                                Time Played:<span>{secondsToClock(memeContent.totalTime)}</span>
                            </p>
                            <p>
                                Wealth:<span>{memeContent.totalGold} coins</span>
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

    return <ul className="game-history-component">{memeContent && getOrder()}</ul>;
}

GameHistoryList.propTypes = {
    content: PropTypes.array.isRequired,
};
