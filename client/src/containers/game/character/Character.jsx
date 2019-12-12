import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './components/character-card/CharacterCard';
import http from '../../../services/http';
import defaultPicture from '../../../assets/img/default_profile.png';
import './character.css';

function Character(props) {
    const [items, setItems] = useState([])
    const [statistics, setStatistics] = useState([])


    useEffect(() => {
        http.Game.character().then(c => {
            const allStats = c.reduce((a, b) => {
                return {
                    strength: a.strength + b.strength,
                    agility: a.agility + b.agility,
                    intelligence: a.intelligence + b.intelligence
                }
            }, { strength: 0, agility: 0, intelligence: 0 });

            setItems(c);
            setStatistics(allStats)
        })
    }, []);

    return (
        <div>
            <h1>Character</h1>

            <div className="profile-card">
                <div>
                    <h1>{props.userName}</h1>
                    <img src={defaultPicture} alt="Profile" />
                </div>

                <div className="profile-stats">
                    <p><b>Your character statistics:</b></p>
                    <p><b>Total Strength: {statistics.strength}</b></p>
                    <p><b>Total Agility:  {statistics.agility}</b></p>
                    <p><b>Total Intelligence:  {statistics.intelligence}</b></p>
                </div>
            </div>



            <div className="item-card-container">
                <div className="item-card-card">
                    {items && items.map((item, index) => {
                        return (<CharacterCard key={index} item={item} />);
                    })}
                </div>
            </div>

        </div>
    );
};

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
    };
};

export default connect(mapStateToProps)(Character);