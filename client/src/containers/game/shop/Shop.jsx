import { useState, useEffect } from 'react';
import { httpGame } from '../../../services/http';
import { toastError } from '../../../utils/toastHandler';
import ItemsList from '../../../components/ItemsList';

export default function Shop() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        httpGame
            .shop()
            .then((i) => {
                if (!i) {
                    return;
                }

                setItems(i);
            })
            .catch((err) => {
                toastError(err);
            });
    }, []);

    return (
        <div>
            <h1>Shop</h1>

            <ItemsList items={items} />
        </div>
    );
}
