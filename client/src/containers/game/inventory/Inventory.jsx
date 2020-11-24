import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { httpGame } from '../../../services/http';
import ItemCard from '../../../components/ItemCard';
import { setSellItem, setEquipItem } from './actions';
import { toastError } from '../../../utils/toastHandler';

function Inventory(props) {
    const newProps = props;
    const [items, setItems] = useState([]);

    useEffect(() => {
        httpGame
            .inventory()
            .then((i) => {
                if (!i) {
                    return;
                }

                const rows = [...Array(Math.ceil(i.length / 4))];
                const arr = rows.map((row, index) => {
                    return i.slice(index * 4, index * 4 + 4);
                });
                setItems(arr);

                if (newProps.inventorySellItem || newProps.inventoryEquipItem) {
                    newProps.setSellItem();
                    newProps.setEquipItem();
                }
            })
            .catch((err) => {
                toastError(err);
            });
    }, [newProps]);

    return (
        <div>
            <h1>Inventory</h1>

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

function mapStateToProps(state) {
    return {
        inventorySellItem: state.game.inventorySellItem,
        inventoryEquipItem: state.game.inventoryEquipItem,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSellItem: () => dispatch(setSellItem(false)),
        setEquipItem: () => dispatch(setEquipItem(false)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
