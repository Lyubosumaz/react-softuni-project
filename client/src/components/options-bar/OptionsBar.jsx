import React from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import './option-bar.css';

function Options(props) {
    const isLogged = props.isLogin;

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    }

    return (isLogged ?
        <div className="options-bar" >
            <button className="options-bar-button" onClick={handleRoute('/game/progress')}>Progress</button>
            <button className="options-bar-button" onClick={handleRoute('/game/shop')}>Shop</button>
            <button className="options-bar-button" onClick={handleRoute('/game/inventory')}>Inventory</button>
            <button className="options-bar-button" onClick={handleRoute('/game/character')}>Character</button>
        </div >
        : null);
};

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin
    }
}

export default connect(mapStateToProps)(Options);