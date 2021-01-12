import { PropTypes } from 'prop-types';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { httpGame } from '../../../services/http';
import { resetLocation } from '../../../services/redux/ducks/ForestRunner/player';
import Overlay from '../../GamePopup';
import Timer from '../../Timer';
import { resetGameLevel, saveGameItems } from './actions';
import World from './components/world/World';

function ForestRunner({ inGame, resetLocationProps, resetGameLevel, saveGameItems }) {
    // TODO Game component should be reworked overall
    useEffect(() => {
        httpGame.shop().then((items) => saveGameItems(items));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        resetLocationProps();
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
    };
}

function mapDispatchToProps(dispatch) {
    return {
        resetLocationProps: () => dispatch(resetLocation()),
        resetGameLevel: () => dispatch(resetGameLevel()),
        saveGameItems: (items) => dispatch(saveGameItems(items)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestRunner);

ForestRunner.propTypes = {
    inGame: PropTypes.bool.isRequired,
    resetLocationProps: PropTypes.func.isRequired,
    resetGameLevel: PropTypes.func.isRequired,
    saveGameItems: PropTypes.func.isRequired,
};
