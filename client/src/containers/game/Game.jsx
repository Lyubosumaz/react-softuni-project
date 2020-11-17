import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import World from './components/world/World';
import Overlay from './components/overlay/Overlay';
import Clock from './components/clock/Clock';
import { httpGame } from '../../services/http';

function Game(props) {
    const newProps = props;

    useEffect(() => {
        httpGame.shop().then((items) => newProps.saveGameItems(items));
    }, [newProps]);

    useEffect(() => {
        newProps.resetPlayerLocation();
        newProps.resetGameLevel();
    }, [newProps]);

    return (
        <Fragment>
            <div>{(newProps.inGame && <Clock />) || <h1>Level: --, Time: --h --m --s</h1>}</div>

            <div>{!newProps.inGame && <Overlay />}</div>

            <div>
                <World />
            </div>
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        inGame: state.game.inGame,
        time: state.game.time,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetPlayerLocation: () =>
            dispatch({
                type: 'RESET_PLAYER_LOCATION',
            }),
        resetGameLevel: () =>
            dispatch({
                type: 'RESET_GAME_LEVEL',
            }),
        saveGameItems: (items) =>
            dispatch({
                type: 'SAVE_GAME_ITEMS_LOOT',
                payload: items,
            }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
