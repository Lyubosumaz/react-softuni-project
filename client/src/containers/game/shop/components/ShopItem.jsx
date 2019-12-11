import React from 'react';
import handleRoute from '../../../../utils/handleRoutes';
import http from '../../../../services/http';
import './shop-items.css';

export default function ShopItems(props) {
    // handleRoute(`/game/buy/${props.item._id}`
    function handleBuy() {
        http.Game.buy(props.item._id).then(res => console.log(res))
    }

    return (
        <div class="flip-card">
            <div class="flip-card-inner">

                <div class="flip-card-front">
                    <img src={props.item.imageUrl} alt="Avatar" />
                </div>

                <div class="flip-card-back">
                    <div>
                        <h1>{props.item.itemName}</h1>
                        <p>Price: {props.item.price}</p>
                        <button className="active-button" onClick={handleBuy}>Buy</button>
                    </div>

                    <div>
                        <p>Stats</p>
                        <p>Strength: {props.item.strength}</p>
                        <p>Agility: {props.item.agility}</p>
                        <p>Intelligence: {props.item.intelligence}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};