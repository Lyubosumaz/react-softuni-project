import { Fragment } from 'react';
import { connect } from 'react-redux';
import secondsToClock from '../../utils/secondsToClock';
import { currentPage } from '../../utils/currentPage';
import numberGenerator from '../../utils/numberGenerator';
import defaultProfilePic from '../../assets/images/default_profile.png';

function MainStatistic(props) {
    const content = props.content;
    let card;

    switch (currentPage()) {
        case 'profile':
            card = (
                <Fragment key={numberGenerator()}>
                    <p>Your Game Profile Records:</p>
                    <p>Total Games Played: {content.totalGames}</p>
                    <p>Total Time Played: {secondsToClock(content.totalTime)}</p>
                    <p>Current Gold: {content.totalGold} coins</p>
                </Fragment>
            );
            break;
        case 'character':
            card = (
                <Fragment key={numberGenerator()}>
                    <p>Your character statistics:</p>
                    <p>Total Strength: {content.strength}</p>
                    <p>Total Agility: {content.agility}</p>
                    <p>Total Intelligence: {content.intelligence}</p>
                </Fragment>
            );
            break;
        default:
            break;
    }

    return (
        <div className="profile-card">
            <header>
                <h1>{props.userName}</h1>
                <img src={defaultProfilePic} alt="Avatar" />
            </header>

            <div className="profile-stats">{card}</div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
    };
}

export default connect(mapStateToProps)(MainStatistic);
