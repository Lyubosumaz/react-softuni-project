import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setSellItem, setEquipItem } from './actions';
import { httpGame } from '../../../services/http';
import { setNotification } from '../../../components/Notification/actions';
import ItemsList from '../../../components/ItemsList';

function Inventory({
    inventorySellItem,
    inventoryEquipItem,
    setSellItemProps,
    setEquipItemProps,
    setNotificationError
}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        httpGame
            .inventory()
            .then((i) => {
                if (!i) {
                    return;
                }

                setItems(i);

                if (inventorySellItem || inventoryEquipItem) {
                    setSellItemProps();
                    setEquipItemProps();
                }
            })
            .catch((err) => {
                setNotificationError(err);
            });
    }, [inventorySellItem, inventoryEquipItem]);

    return (
        <div>
            <h1>Inventory</h1>

            <ItemsList items={items} />
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
        setSellItemProps: () => dispatch(setSellItem(false)),
        setEquipItemProps: () => dispatch(setEquipItem(false)),
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

Inventory.propTypes = {
    inventorySellItem: PropTypes.bool.isRequired,
    inventoryEquipItem: PropTypes.bool.isRequired,
    setSellItemProps: PropTypes.func.isRequired,
    setEquipItemProps: PropTypes.func.isRequired,
    setNotificationError: PropTypes.func.isRequired,
};
