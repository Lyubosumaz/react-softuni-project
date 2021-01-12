import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setState } from '../../services/redux/ducks/timer';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';
import { setGameStart } from '../Games/ForestRunner/actions';

function GamePopup({ setGameStartProps, startTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        setGameStartProps();
        startTimerProps();
    };

    return (
        <div className={`overlay-container-wrapper`}>
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

function mapDispatchToProps(dispatch) {
    return {
        setGameStartProps: () => dispatch(setGameStart()),
        startTimerProps: () => dispatch(setState().start()),
    };
}

export default connect(null, mapDispatchToProps)(GamePopup);

GamePopup.propTypes = {
    setGameStartProps: PropTypes.func.isRequired,
    startTimerProps: PropTypes.func.isRequired,
};
