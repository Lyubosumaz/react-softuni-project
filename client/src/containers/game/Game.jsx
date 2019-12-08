import React, { useState } from 'react';
import { connect } from 'react-redux';
import World from './components/world/World';
import Overlay from './components/overlay/Overlay';

function Game(props) {
    const inGame = props.inGame
    const [count, setCount] = useState(0);

    if (inGame) {
        setTimeout(() => {
            setCount(prevState => (prevState + 1))
        }, 1000)
    }

    return (
        <React.Fragment>
            <h1>{count}</h1>
            {!inGame && <Overlay />}
            <World />
        </React.Fragment>
    );
};

function mapStateToProps(state) {
    return {
        inGame: state.player.inGame,
    };
};

export default connect(mapStateToProps)(Game);