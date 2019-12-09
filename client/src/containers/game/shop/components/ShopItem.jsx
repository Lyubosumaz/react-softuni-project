import React from 'react';
import './shop-items.css';

export default function ShopItems(props) {
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