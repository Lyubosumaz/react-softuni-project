import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { forestRunner } from '../../router/paths.json';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';
import Timer from '../Timer';

// TODO need to fix the Router, atm it makes re-rendering
// TODO make this component reusable for many games
function GameOptionBar({ isLogin, inGame }) {
    const isLogged = isLogin;
    const [activated, setActivated] = useState();

    function handleCallBack(buttonDirection) {
        setActivated(buttonDirection);
    }

    const optionsAttributes = { activated, handleCallBack, buttonStyles: buttonClass.GameOptionBar };
    const initializedOptionsBtn = factoryButtons(optionsAttributes);

    return isLogged ? (
        <div className="options-bar">
            <ul>
                {/* TODO after reworking the game this should be different */}
                <li className={`game-utilities`}>{inGame ? <Timer /> : <span>Level: --, Time: --h --m --s</span>}</li>
                <li>{initializedOptionsBtn(forestRunner, 'Forest Runner')}</li>

                <li>{initializedOptionsBtn(`${forestRunner}/progress`, 'Progress')}</li>
                <li>{initializedOptionsBtn(`${forestRunner}/shop`, 'Shop')}</li>
                <li>{initializedOptionsBtn(`${forestRunner}/inventory`, 'Inventory')}</li>
                <li>{initializedOptionsBtn(`${forestRunner}/character`, 'Character')}</li>
            </ul>
        </div>
    ) : null;
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
        inGame: state.game.inGame,
    };
}

export default connect(mapStateToProps)(GameOptionBar);

GameOptionBar.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    inGame: PropTypes.bool.isRequired,
};
