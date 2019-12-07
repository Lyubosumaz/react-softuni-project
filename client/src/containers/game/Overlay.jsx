import React from 'react';
import { connect } from 'react-redux';
import './overlay.css';

function Overlay(props) {

    const handleSubmit = () => {
        props.setGameStart();
    }

    return (
        <section className="overlay-container">
            <div>
                <h2><b>Start the Game</b></h2>
            </div>

            <div>
                <p><b>After you press the button Ready, your game starts</b></p>
            </div>

            <div>
                <button type="submit" className="form-action-btn" onClick={handleSubmit}>Ready</button>
            </div>
        </section>
    );
};

function mapStateToProps(state) {
    return {
        isLogin: state.login.isLogin,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setGameStart: () => dispatch({
            type: 'START',
            payload: true,
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);