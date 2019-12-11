import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import World from './components/world/World';
import Overlay from './components/overlay/Overlay';
import Clock from './components/clock/Clock';
import http from '../../services/http';

function Game(props) {
    const inGame = props.inGame

    useEffect(() => {
        http.Game.shop().then(items => props.saveGameItems(items));
    }, []);

    useEffect(() => {
        props.resetPlayerState();
        props.resetGameState();
    });

    return (
        <React.Fragment>
            {inGame && <Clock saveTime={inGame} /> || <h1>Level: -, Time: -</h1>}

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
        saveGameItems: (items) => dispatch({
            type: 'SAVE_GAME_ITEMS',
            payload: items,
        }),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);