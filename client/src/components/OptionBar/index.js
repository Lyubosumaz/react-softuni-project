import { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { factoryButtons } from '../../utils/factory';

// TODO rename this component to GameOptionBar
// TODO need to fix the Router, atm it makes re-rendering
// TODO make this component reusable for many games
function Options({ isLogin }) {
    const isLogged = isLogin;
    const [activated, setActivated] = useState();

    function handleCallBack(buttonDirection) {
        setActivated(buttonDirection);
    }

    const optionsAttributes = { activated, handleCallBack, buttonStyles: 'options-bar-button' };
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

export default connect(mapStateToProps)(Options);

Options.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};
