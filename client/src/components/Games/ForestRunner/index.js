import { PropTypes } from 'prop-types';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Overlay from '../../components/GamePopup';
import Timer from '../../components/Timer';
import { httpGame } from '../../services/http';
import World from './components/world/World';

function Game({ inGame, time, resetPlayerLocation, resetGameLevel, saveGameItems }) {
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
            <div>{(inGame && <Timer />) || <h1>Level: --, Time: --h --m --s</h1>}</div>

            {!inGame && <Overlay />}

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