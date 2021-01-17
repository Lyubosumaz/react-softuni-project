import { connect } from 'react-redux';
import { resetLevel, toggleInGame } from '../../services/redux/ducks/ForestRunner/game';
import { resetLocation } from '../../services/redux/ducks/ForestRunner/player';
import { handlePopupEnd, handlePopupStart } from '../../services/redux/ducks/popup';
import { toggleTimer } from '../../services/redux/ducks/timer';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function GamePopupEnd({ totalGold, savedItem, totalTime, gameLevel, closePopupEnd, toggleInGameOff, displayPopupStart, resetLocationProps, resetLevelProps, gamePopupEnd, startLevelProps, startTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        closePopupEnd();

        toggleInGameOff();
        displayPopupStart();
        resetLocationProps();
        resetLevelProps();
    };

    return (
        <div className={`overlay-container-wrapper`}>
            <section className={`overlay-container`}>
                <header>
                    <h2>Game Statistics</h2>
                    <h4>Level: {gameLevel}</h4>
                </header>

                <p>Some text gold: {totalGold}</p>
                <p>Some text item: {savedItem.itemName}</p>
                <p>Some text time: {totalTime}</p>
                <p>Some text level: {gameLevel}</p>

                <div className={`overlay-buttons-wrapper`}>{initializedOverlayBtn(null, 'Next Level', 'next-level', handleSubmit)}</div>
            </section>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        totalGold: state.game.gold,
        savedItem: state.game.item,
        totalTime: state.timer.time,
        gameLevel: state.game.level,
        gamePopupEnd: state.popup.gamePopupEnd,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleInGameOff: () => dispatch(toggleInGame().off()),
        displayPopupStart: () => dispatch(handlePopupStart().display()),
        resetLocationProps: () => dispatch(resetLocation()),
        resetLevelProps: () => dispatch(resetLevel()),
        startTimerProps: () => dispatch(toggleTimer().start()),
        closePopupEnd: () => dispatch(handlePopupEnd().close()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePopupEnd);
