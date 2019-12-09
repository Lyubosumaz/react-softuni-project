import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import World from './components/world/World';
import Overlay from './components/overlay/Overlay';
import Clock from './components/clock/Clock';

function Game(props) {
    const inGame = props.inGame

    useEffect(() => {
        props.resetPlayerState();
        props.resetGameState();
    });

    return (
        <React.Fragment>
            {inGame && < Clock saveTime={inGame}/> || <h1>0</h1>}

            <div>
                {!inGame && <Overlay />}
            </div>

            <World />
        </React.Fragment>
    );
};

function mapStateToProps(state) {
    return {
        inGame: state.game.inGame,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        resetPlayerState: () => dispatch({
            type: 'RESET_MOVE_PLAYER',
        }),
        resetGameState: () => dispatch({
            type: 'RESET_GAME',
        }),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);