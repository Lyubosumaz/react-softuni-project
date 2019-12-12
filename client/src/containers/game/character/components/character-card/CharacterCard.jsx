import React from 'react';
import http from '../../../../../services/http';
import { toast } from 'react-toastify';
import './character-card.css';

export default function CharacterCard(props) {

    function handleRemove() {
        http.Game.remove(props.item._id)
            .then((res) => {
                toast(res.message, {
                    type: toast.TYPE.INFO,
                });
            })
            .catch((err) => {
                toast(err.message, {
                    type: toast.TYPE.ERROR,
                });
            });
    };

    return (
        <div className={props.styleClass ? props.styleClass : 'item-card'}>
            <div className="item-card-inner">

                <div className="item-card-front">
                    <img src={props.item.imageUrl} alt="Avatar" />
                </div>

                <div className="item-card-back">
                    <h1>{props.item.itemName}</h1>

                    <div>
                        <h3>Statistics:</h3>
                        <p>Strength: {props.item.strength}</p>
                        <p>Agility: {props.item.agility}</p>
                        <p>Intelligence: {props.item.intelligence}</p>
                    </div>

                    <div>
                        <h3>Price: {props.item.price}</h3>
                        <button className="active-button remove" onClick={handleRemove}>Remove</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
