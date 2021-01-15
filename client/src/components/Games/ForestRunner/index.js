import { PropTypes } from 'prop-types';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { httpGame } from '../../../services/http';
import { resetLevel, saveItems } from '../../../services/redux/ducks/ForestRunner/game';
import { resetLocation } from '../../../services/redux/ducks/ForestRunner/player';
import Overlay from '../../GamePopup';
import GamePopupEnd from '../../GamePopupEnd';
import World from './core/World';

function ForestRunner({ inGame, gamePopupEnd, resetLocationProps, resetLevelProps, saveItemsProps }) {
    // TODO Game component should be reworked overall
    useEffect(() => {
        httpGame.shop().then((items) => saveItemsProps(items));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        resetLocationProps();
        resetLevelProps();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            {/* <div>{(inGame && <Timer />) || <h1>Level: --, Time: --h --m --s</h1>}</div> */}

            {!inGame && <Overlay />}
            {gamePopupEnd ? <GamePopupEnd /> : null}

            <World />
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        inGame: state.game.inGame,
        gamePopupEnd: state.popup.gamePopupEnd,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetLocationProps: () => dispatch(resetLocation()),
        resetLevelProps: () => dispatch(resetLevel()),
        saveItemsProps: (items) => dispatch(saveItems(items)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestRunner);

ForestRunner.propTypes = {
    inGame: PropTypes.bool.isRequired,
    resetLocationProps: PropTypes.func.isRequired,
    resetLevelProps: PropTypes.func.isRequired,
    saveItemsProps: PropTypes.func.isRequired,
};
