import { connect } from 'react-redux';
import './overlay.css';
import { setGameStart, setGameTimer } from './actions';
import Button from '../../../../components/Button';

function Overlay(props) {
    const handleSubmit = () => {
        props.setGameStart();
        props.setGameTimer();
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
        setGameStart: () => dispatch(setGameStart(true)),
        setGameTimer: () => dispatch(setGameTimer(true)),
    };
}

export default connect(null, mapDispatchToProps)(Overlay);
