import { connect } from 'react-redux';
import { popupEndGame } from '../../services/redux/ducks/ForestRunner/advancedActions';
import { nextLevel, resetLevel, toggleInGame } from '../../services/redux/ducks/ForestRunner/game';
import { resetLocation } from '../../services/redux/ducks/ForestRunner/player';
import { handlePopupEnd, handlePopupStart } from '../../services/redux/ducks/popup';
import { toggleTimer } from '../../services/redux/ducks/timer';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function GamePopupEnd({ totalGold, savedItem, totalTime, gameLevel, popupEndGameProps, toggleInGameOff, displayPopupStart, resetLocationProps, resetLevelProps, nextLevelProps, gamePopupEnd, startLevelProps, startTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        popupEndGameProps();
        // closePopupEnd();
        // nextLevelProps(gameLevel);
        // toggleInGameOff();
        // displayPopupStart();
        // resetLocationProps();
        // resetLevelProps();
    };

    return (
        <div className={`overlay-container-wrapper`}>
            {console.log(savedItem)}
            <section className={`overlay-container`}>
                <header>
                    <h2>Game Statistics</h2>
                    <h4>Level: {gameLevel}</h4>
                </header>

                <div className={`game-statistics-wrapper`}>
                    <p>Looted gold: {totalGold}</p>
                    <p>Looted item: {savedItem[0].itemName}</p>
                    <p>Your time: {totalTime}</p>
                </div>

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
        popupEndGameProps: () => dispatch(popupEndGame()),
        toggleInGameOff: () => dispatch(toggleInGame().off()),
        displayPopupStart: () => dispatch(handlePopupStart().display()),
        resetLocationProps: () => dispatch(resetLocation()),
        resetLevelProps: () => dispatch(resetLevel()),
        nextLevelProps: (data) => dispatch(nextLevel(data)),
        startTimerProps: () => dispatch(toggleTimer().start()),
        closePopupEnd: () => dispatch(handlePopupEnd().close()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePopupEnd);
