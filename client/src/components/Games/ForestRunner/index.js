import { PropTypes } from 'prop-types';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { httpGame } from '../../../services/http';
import { initialGameLoad } from '../../../services/redux/ducks/ForestRunner/advancedActions';
import { saveItems } from '../../../services/redux/ducks/ForestRunner/game';
import GamePopupEnd from '../../GamePopupEnd';
import Overlay from '../../GamePopupStart';
import World from './core/World';

function ForestRunner({ gamePopupStart, gamePopupEnd, initialGameLoadProps, saveItemsProps }) {
    useEffect(() => {
        httpGame.shop().then((items) => saveItemsProps(items));
    }, [saveItemsProps]);

    useEffect(() => {
        initialGameLoadProps();
    }, [initialGameLoadProps]);

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
        gamePopupStart: state.popup.gamePopupStart,
        gamePopupEnd: state.popup.gamePopupEnd,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        initialGameLoadProps: () => dispatch(initialGameLoad()),
        saveItemsProps: (items) => dispatch(saveItems(items)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestRunner);

ForestRunner.propTypes = {
    gamePopupStart: PropTypes.bool.isRequired,
    gamePopupEnd: PropTypes.bool.isRequired,
    initialGameLoadProps: PropTypes.func.isRequired,
    saveItemsProps: PropTypes.func.isRequired,
};
