import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { buttonClass } from '../../../../utils/class-names.json';
import { factoryButtons } from '../../../../utils/factory';
import { setGameStart, setGameTimer } from './actions';

function Overlay({ setGameStartProps, setGameTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        setGameStartProps();
        setGameTimerProps();
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
        setGameStartProps: () => dispatch(setGameStart(true)),
        setGameTimerProps: () => dispatch(setGameTimer(true)),
    };
}

export default connect(null, mapDispatchToProps)(Overlay);

Overlay.propTypes = {
    setGameStartProps: PropTypes.func.isRequired,
    setGameTimerProps: PropTypes.func.isRequired,
};
