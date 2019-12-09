import React, { useState, useEffect } from 'react';
import ShopItems from './components/ShopItem';
import './shop.css';
import http from '../../../services/http';

export default function Shop() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        http.Game.shop()
            .then((i) => { return setItems(i); })
            .catch((err) => { console.log(err) });
    }, []);

    return (
        <div >
            <h1>Shop</h1>

            <div className="shop-items-container">
                {items && items.map((item, index) => {
                    return (<ShopItems key={index} item={item} />);
                })}
            </div>
        </div>
    );
};