import { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { factoryButtons } from '../../utils/factory';
import { buttonClass } from '../../utils/class-names.json';

// TODO need to fix the Router, atm it makes re-rendering
// TODO make this component reusable for many games
function GameOptionBar({ isLogin }) {
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
                <li>{initializedOptionsBtn('game/progress', 'Progress')}</li>
                <li>{initializedOptionsBtn('game/shop', 'Shop')}</li>
                <li>{initializedOptionsBtn('game/inventory', 'Inventory')}</li>
                <li>{initializedOptionsBtn('game/character', 'Character')}</li>
            </ul>
        </div>
    ) : null;
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(GameOptionBar);

GameOptionBar.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};
