import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import http from '../../../services/http';
import { toast } from 'react-toastify';
import InventoryCard from './components/inventory-card/InventoryCard';
import { setSellItem, setEquipItem } from './actions';

function Inventory(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        http.Game.inventory()
            .then((i) => {
                if (!i) {
                    return;
                }

                const rows = [...Array(Math.ceil(i.length / 4))];
                const arr = rows.map((row, index) => {
                    return i.slice(index * 4, index * 4 + 4);
                });
                setItems(arr);

                if (props.inventorySellItem || props.inventoryEquipItem) {
                    props.setSellItem();
                    props.setEquipItem();
                }
            })
            .catch((err) => {
                toast(err.message, {
                    type: toast.TYPE.ERROR,
                });
            });
    });

    return (
        <div>
            <h1>Inventory</h1>

            <div className="item-card-container">
                {items &&
                    items.map((row, i) => {
                        return (
                            <div key={i} className="item-card-card">
                                {row.map((item, index) => {
                                    return <InventoryCard key={index} item={item} />;
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
