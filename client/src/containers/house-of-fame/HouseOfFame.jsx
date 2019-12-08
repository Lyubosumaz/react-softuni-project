import React from 'react';
import { connect } from 'react-redux';
import handleRoute from '../../utils/handleRoutes';
import './house-of-fame.css';

function HouseOfFame(props) {
    return (
        <div className="main-container">
            <h1>House of Fame</h1>

            <p className="house-of-fame-search-p"><b>Find your player: </b><input type="text" className="my-search" placeholder="Search.."></input></p>

            <div className="info-container">
                {props.isLogin ?
                    <p>You saw what you need. Now join the game <button className="info-button" onClick={handleRoute('/game')}>Here</button>!</p>
                    :
                    <p>Join the race climb ladder and be the apex legend <button className="info-button" onClick={handleRoute('/login')}>Sign in</button>.</p>}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
};

export default connect(mapStateToProps)(HouseOfFame);