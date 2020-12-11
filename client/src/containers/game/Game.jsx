import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import World from './components/world/World';
import Overlay from './components/overlay/Overlay';
import Clock from './components/clock/Clock';
import { httpGame } from '../../services/http';

function Game({
    inGame,
    time,
    resetPlayerLocation,
    resetGameLevel,
    saveGameItems
}) {
    // TODO Game component should be reworked overall
    useEffect(() => {
        httpGame.shop().then((items) => saveGameItems(items));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        resetPlayerLocation();
        resetGameLevel();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div>{(inGame && <Clock />) || <h1>Level: --, Time: --h --m --s</h1>}</div>

            <div>{!inGame && <Overlay />}</div>

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

Game.propTypes = {
    inGame: PropTypes.bool.isRequired,
    time: PropTypes.number.isRequired,
    resetPlayerLocation: PropTypes.func.isRequired,
    resetGameLevel: PropTypes.func.isRequired,
    saveGameItems: PropTypes.func.isRequired,
};
