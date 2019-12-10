import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import GameHistoryCard from './game-history-card/GameHistoryCard';
import handleRoute from '../../utils/handleRoutes';
import defaultProfilePic from '../../assets/img/default_profile.png';
import http from '../../services/http';
import './profile.css';

function Profile(props) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        http.User.profile().then((gameProfile) => { setProfile(gameProfile); })
    }, []);

    console.log(profile)
    return (
        <div className="main-container">
            <h1>Profile</h1>

            {profile &&
                <div className="profile-card">
                    <div>
                        <h1>Name: {props.userName}</h1>
                        <img src={defaultProfilePic} alt="Profile" />
                    </div>

                    <div className="profile-stats">
                        <p><b>Your Game Profile Records:</b></p>
                        <p><b>Total Games Played: {profile.totalGames}</b></p>
                        <p><b>Total Time Played: {profile.totalTime}</b></p>
                        <p><b>Total Gold Accumulated: {profile.totalGames}</b></p>
                    </div>
                </div>}

            <div className="profile-game-history">
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
                <GameHistoryCard />
            </div>

            <div className="info-container">
                <p>Play one more game <button className="info-button" onClick={handleRoute('/game')}>Here</button>!</p>
            </div>
        </div >
    );
};

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
    };
};

export default connect(mapStateToProps)(Profile);