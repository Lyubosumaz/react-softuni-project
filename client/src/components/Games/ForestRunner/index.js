import { PropTypes } from 'prop-types';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { httpGame } from '../../../services/http';
import { resetLevel, saveItems } from '../../../services/redux/ducks/ForestRunner/game';
import { resetLocation } from '../../../services/redux/ducks/ForestRunner/player';
import { handlePopupStart } from '../../../services/redux/ducks/popup';
import GamePopupEnd from '../../GamePopupEnd';
import Overlay from '../../GamePopupStart';
import World from './core/World';

function ForestRunner({ displayPopupStart, gamePopupStart, gamePopupEnd, resetLocationProps, resetLevelProps, saveItemsProps }) {
    // TODO Game component should be reworked overall
    useEffect(() => {
        httpGame.shop().then((items) => saveItemsProps(items));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        displayPopupStart();
        resetLocationProps();
        resetLevelProps();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            {gamePopupStart ? <Overlay /> : null}
            {gamePopupEnd ? <GamePopupEnd /> : null}

            <World />
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        inGame: state.game.inGame,
        gamePopupStart: state.popup.gamePopupStart,
        gamePopupEnd: state.popup.gamePopupEnd,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        displayPopupStart: () => dispatch(handlePopupStart().display()),
        resetLocationProps: () => dispatch(resetLocation()),
        resetLevelProps: () => dispatch(resetLevel()),
        saveItemsProps: (items) => dispatch(saveItems(items)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestRunner);

ForestRunner.propTypes = {
    gamePopupStart: PropTypes.bool.isRequired,
    gamePopupEnd: PropTypes.bool.isRequired,
    resetLocationProps: PropTypes.func.isRequired,
    resetLevelProps: PropTypes.func.isRequired,
    saveItemsProps: PropTypes.func.isRequired,
};
