import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setGameStart, setGameTimer } from './actions';
import { factoryButtons } from '../../../../utils/factory';
import { buttonClass } from '../../../../utils/class-names.json';

function Overlay({ setGameStartProps, setGameTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        setGameStartProps();
        setGameTimerProps();
    };

    return (
        <section className="overlay-container">
            <header>
                <h2>Start the Game</h2>
            </header>

            <div>
                <p>After you press the Ready button, your game starts</p>
            </div>

            <div>
                {initializedOverlayBtn(null, 'Ready!', 'ready', handleSubmit)}
                {initializedOverlayBtn('home', null, 'home')}
            </div>
        </section>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setGameStartProps: () => dispatch(setGameStart(true)),
        setGameTimerProps: () => dispatch(setGameTimer(true)),
    };
}

export default connect(null, mapDispatchToProps)(Overlay);

Overlay.propTypes = {
    setGameStartProps: PropTypes.func.isRequired,
    setGameTimerProps: PropTypes.func.isRequired,
};
