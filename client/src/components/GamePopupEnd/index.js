import { connect } from 'react-redux';
import { startLevel } from '../../services/redux/ducks/ForestRunner/game';
import { setState } from '../../services/redux/ducks/timer';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function GamePopupEnd({ gamePopupEnd, startLevelProps, startTimerProps }) {
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
            </section>
        </div>
    );
}

function mapStateToProps(state) {
    return {
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
