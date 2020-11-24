import { useState, useEffect } from 'react';
import { httpGame } from '../../../services/http';
import { toast } from 'react-toastify';
import ItemCard from '../../../components/ItemCard';
import { toastError } from '../../../utils/toastHandler';

export default function Shop() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        httpGame
            .shop()
            .then((i) => {
                if (!i) {
                    return;
                }

                const rows = [...Array(Math.ceil(i.length / 4))];
                const arr = rows.map((row, index) => {
                    return i.slice(index * 4, index * 4 + 4);
                });

                setItems(arr);
            })
            .catch((err) => {
                toastError(err);
            });
    }, []);

    return (
        <div>
            <h1>Shop</h1>

            <div className="item-card-container">
                {items &&
                    items.map((row, i) => {
                        return (
                            <div key={i} className="item-card-card">
                                {row.map((item, index) => {
                                    return <ItemCard key={index} item={item} />;
                                })}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
