import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { startLevel } from '../../services/redux/ducks/ForestRunner/game';
import { setState } from '../../services/redux/ducks/timer';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function GamePopup({ toggleInGame, startLevelProps, startTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        startLevelProps();
        startTimerProps();
    };

    return (
        <div className={`overlay-container-wrapper  ${!toggleInGame ? 'dimmer' : ''}`}>
            <section className={`overlay-container`}>
                <header>
                    <h2>Start the Game</h2>
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
        toggleInGame: state.game.toggleInGame,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        startLevelProps: () => dispatch(startLevel()),
        startTimerProps: () => dispatch(setState().start()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePopup);

GamePopup.propTypes = {
    toggleInGame: PropTypes.bool.isRequired,
    startLevelProps: PropTypes.func.isRequired,
    startTimerProps: PropTypes.func.isRequired,
};
