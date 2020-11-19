import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import secondsToClock from '../../utils/secondsToClock';
import { httpUser } from '../../services/http';
import GameHistoryCard from './components/GameHistoryCard';
import defaultProfilePic from '../../assets/images/default_profile.png';

function Profile(props) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        httpUser.profile().then((gameProfile) => {
            setProfile(gameProfile);
        });
    }, []);

    return (
        <section className="component-wrapper">
            <div className="component-data-wrapper">
                {profile && (
                    <div className="profile-card">
                        <div>
                            <h1>{props.userName}</h1>
                            <img src={defaultProfilePic} alt="Profile" />
                        </div>

                        <div className="profile-stats">
                            <p>
                                <b>Your Game Profile Records:</b>
                            </p>
                            <p>
                                <b>Total Games Played: {profile.totalGames}</b>
                            </p>
                            <p>
                                <b>Total Time Played: {secondsToClock(profile.totalTime)}</b>
                            </p>
                            <p>
                                <b>Current Gold: {profile.totalGold} coins</b>
                            </p>
                        </div>
                    </div>
                )}

                <div className="profile-game-history">
                    {profile &&
                        profile.gameHistory
                            .slice(0)
                            .reverse()
                            .map((data, index) => {
                                return <GameHistoryCard key={index} data={data} />;
                            })}
                </div>
            </div>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
    };
}

export default connect(mapStateToProps)(Profile);
