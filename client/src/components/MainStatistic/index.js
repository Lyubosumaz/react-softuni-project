import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { secondsToClock } from '../../utils/secondsToClock';
import { currentPage } from '../../utils/currentPage';
import { numberGenerator } from '../../utils/numberGenerator';
import defaultProfilePic from '../../assets/images/default_profile.png';

function MainStatistic({ userName, content }) {
    const page = currentPage();

    let card;
    switch (page) {
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
                <h2>{userName}</h2>
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

MainStatistic.propTypes = {
    userName: PropTypes.string.isRequired,
    content: function (page) {
        switch (page) {
            case 'profile':
                return PropTypes.shape({
                    totalGames: PropTypes.number.isRequired,
                    totalTime: PropTypes.number.isRequired,
                    totalGold: PropTypes.number.isRequired,
                });
            case 'character':
                return PropTypes.shape({
                    strength: PropTypes.number.isRequired,
                    agility: PropTypes.number.isRequired,
                    intelligence: PropTypes.number.isRequired,
                });
            default:
                break;
        }
    },
};
