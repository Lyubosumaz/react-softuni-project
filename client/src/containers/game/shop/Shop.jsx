import React, { useState, useEffect } from 'react';
import ShopCard from './components/shop-card/ShopCard';
import http from '../../../services/http';

export default function Shop() {
    const [items, setItems] = useState([])

    useEffect(() => {
        http.Game.shop()
            .then((i) => {
                const rows = [...Array(Math.ceil(i.length / 4))];
                const arr = rows.map((row, index) => {
                    return i.slice(index * 4, index * 4 + 4);
                })
                setItems(arr);
            })
            .catch((err) => { console.log(err) });
    }, []);

    return (
        <div >
            <h1>Shop</h1>

            <div className="item-card-container">
                {items && items.map((row, i) => {
                    return (
                        <div key={i} className="item-card-card">
                            {row.map((item, index) => {
                                return (<ShopCard key={index} item={item} />);
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};