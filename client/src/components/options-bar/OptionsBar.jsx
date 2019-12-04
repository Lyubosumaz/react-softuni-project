import React from 'react';
import { connect } from 'react-redux';
import history from '../../services/history';
import './option-bar.css';

function Options(props) {
    const isLogged = props.isLogin;

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    }

    return (isLogged ?
        <div class="options-bar" >
            <button className="options-bar-button" onClick={handleRoute('/progress')}>Progress</button>
            <button className="options-bar-button" onClick={handleRoute('/shop')}>Shop</button>
            <button className="options-bar-button" onClick={handleRoute('/inventory')}>Inventory</button>
            <button className="options-bar-button" onClick={handleRoute('/character')}>Character</button>
        </div >
        : null);
};

function mapStateToProps(state) {
    return {
        isLogin: state.login.isLogin
    }
}

export default connect(mapStateToProps)(Options);