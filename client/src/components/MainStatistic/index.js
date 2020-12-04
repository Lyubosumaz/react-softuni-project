import { Fragment } from 'react';
import { connect } from 'react-redux';
import secondsToClock from '../../utils/secondsToClock';
import { currentPage } from '../../utils/currentPage';
import { numberGenerator } from '../../utils/numberGenerator';
import defaultProfilePic from '../../assets/images/default_profile.png';

function MainStatistic(props) {
    const content = props.content;
    let card;

    switch (currentPage()) {
        case 'profile':
            card = (
                <Fragment key={numberGenerator()}>
                    <p>Your Game Profile Records:</p>
                    <p>
                        Total Games Played:<span>{content.totalGames}</span>
                    </p>
                    <p>
                        Total Time Played:<span>{secondsToClock(content.totalTime)}</span>
                    </p>
                    <p>
                        Current Gold:<span>{content.totalGold} coins</span>
                    </p>
                </Fragment>
            );
            break;
        case 'character':
            card = (
                <Fragment key={numberGenerator()}>
                    <p>Your character statistics:</p>
                    <p>
                        Total Strength:<span>{content.strength}</span>
                    </p>
                    <p>
                        Total Agility:<span>{content.agility}</span>
                    </p>
                    <p>
                        Total Intelligence:<span>{content.intelligence}</span>
                    </p>
                </Fragment>
            );
            break;
        default:
            break;
    }

    return (
        <section className="statistic-component">
            <header className="statistic-header">
                <p>Account:</p>
                <h2>{props.userName}</h2>
            </header>

            <div className="statistic-avatar">
                <img src={defaultProfilePic} alt="Avatar" />
            </div>

            <div className="statistic-details">{card}</div>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
    };
}

export default connect(mapStateToProps)(MainStatistic);
