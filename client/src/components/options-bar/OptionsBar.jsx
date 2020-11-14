import React from 'react';
import { connect } from 'react-redux';
import history from 'utils/history';

function Options(props) {
    const isLogged = props.isLogin;

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    };

    return isLogged ? (
        <div className="options-bar">
            <ul>
                <li>
                    <a className="options-bar-button" onClick={handleRoute('/game/progress')}>
                        Progress
                    </a>
                </li>
                <li>
                    <a className="options-bar-button" onClick={handleRoute('/game/shop')}>
                        Shop
                    </a>
                </li>
                <li>
                    <a className="options-bar-button" onClick={handleRoute('/game/inventory')}>
                        Inventory
                    </a>
                </li>
                <li>
                    <a className="options-bar-button" onClick={handleRoute('/game/character')}>
                        Character
                    </a>
                </li>
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
