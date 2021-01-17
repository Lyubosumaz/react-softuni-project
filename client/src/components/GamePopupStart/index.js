import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { toggleInGame } from '../../services/redux/ducks/ForestRunner/game';
import { handlePopupStart } from '../../services/redux/ducks/popup';
import { toggleTimer } from '../../services/redux/ducks/timer';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function GamePopupStart({ inGame, level, closePopupStart, toggleInGameOn, startTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        toggleInGameOn();
        startTimerProps();
        closePopupStart();
    };

    return (
        <div className={`overlay-container-wrapper  ${!inGame ? 'dimmer' : ''}`}>
            <section className={`overlay-container`}>
                <header>
                    <h2>Start the Game</h2>
                    <h4>Level: {level}</h4>
                </header>

                <p>You are not prepend!? After you press the Ready! button, your game starts</p>

                <div className={`overlay-buttons-wrapper`}>
                    {initializedOverlayBtn(null, 'Ready!', 'ready', handleSubmit)}
                    {initializedOverlayBtn('home', null, 'home')}
                </div>
            </section>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        inGame: state.game.inGame,
        level: state.game.level,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleInGameOn: () => dispatch(toggleInGame().on()),
        startTimerProps: () => dispatch(toggleTimer().start()),
        closePopupStart: () => dispatch(handlePopupStart().close()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePopupStart);

GamePopupStart.propTypes = {
    inGame: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    toggleInGameOn: PropTypes.func.isRequired,
    startTimerProps: PropTypes.func.isRequired,
};
