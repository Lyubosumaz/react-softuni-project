import { connect } from 'react-redux';
import { handleRoute } from '../../../../utils/history';
import './overlay.css';
import { setGameStart, setGameTimer } from './actions';

function Overlay(props) {
    const handleSubmit = () => {
        props.setGameStart();
        props.setGameTimer();
    };

    return (
        <section className="overlay-container">
            <div>
                <h2>
                    <b>Start the Game</b>
                </h2>
            </div>

            <div>
                <p>
                    <b>After you press the Ready button, your game starts</b>
                </p>
            </div>

            <div>
                <button type="submit" className="form-action-btn" onClick={handleSubmit}>
                    Ready!
                </button>
                <button type="submit" className="form-action-btn home" onClick={handleRoute('/home')}>
                    Home
                </button>
            </div>
        </section>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setGameStart: () => dispatch(setGameStart(true)),
        setGameTimer: () => dispatch(setGameTimer(true)),
    };
}

export default connect(null, mapDispatchToProps)(Overlay);
