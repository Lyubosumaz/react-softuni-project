import { connect } from 'react-redux';
import { startLevel } from '../../services/redux/ducks/ForestRunner/game';
import { setState } from '../../services/redux/ducks/timer';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function GamePopupEnd({ totalGold, savedItem, totalTime, gameLevel, gamePopupEnd, startLevelProps, startTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        startLevelProps();
        startTimerProps();
    };

    return (
        <div className={`overlay-container-wrapper`}>
            <section className={`overlay-container`}>
                <header>
                    <h2>Game Statistics</h2>
                </header>

                <p>Some text gold: {totalGold}</p>
                <p>Some text item: {savedItem.itemName}</p>
                <p>Some text time: {totalTime}</p>
                <p>Some text level: {gameLevel}</p>

                <div className={`overlay-buttons-wrapper`}>{initializedOverlayBtn(null, 'Next Level', 'ready')}</div>
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
        startLevelProps: () => dispatch(startLevel()),
        startTimerProps: () => dispatch(setState().start()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePopupEnd);
