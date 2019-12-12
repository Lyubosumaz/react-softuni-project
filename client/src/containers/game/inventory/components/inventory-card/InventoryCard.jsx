import React from 'react';
import http from '../../../../../services/http';
import { toast } from 'react-toastify';
import './inventory-card.css';

export default function InventoryCard(props) {

    function handleSell() {
        http.Game.sell(props.item._id)
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

    function handleEquip() {
        http.Game.equip(props.item._id)
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
                        <button className="active-button sell" onClick={handleSell}>Sell</button>
                        <button className="active-button" onClick={handleEquip}>Equip</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
