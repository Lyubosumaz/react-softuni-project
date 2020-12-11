import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './overlay.css';
import { setGameStart, setGameTimer } from './actions';
import Button from '../../../../components/Button';

function Overlay({ setGameStartProps, setGameTimerProps }) {
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
                <Button additionalClassName="form-action-btn" buttonText="Ready!" functionPressButton={handleSubmit} />
                <Button additionalClassName="form-action-btn home" buttonText="Home" direction="home" />
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
