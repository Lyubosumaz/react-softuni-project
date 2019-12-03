import React from 'react';
import { connect } from 'react-redux';
import './option-bar.css';

function Options(props) {
    const isLogged = props.isLogin;

    return (isLogged ?
        <div class="options-bar" >
            <a href="/progress">Progress</a>
            <a href="/shop">Shop</a>
            <a href="/inventory">Inventory</a>
            <a href="/character">Character</a>
            {/* <a href="#">Pay to Shop</a> */}
            {/* <a href="#">Merchant Guild</a> */}
        </div >
        : null);
};

function mapStateToProps(state) {
    return {
        isLogin: state.login.isLogin
    }
}

export default connect(mapStateToProps)(Options);