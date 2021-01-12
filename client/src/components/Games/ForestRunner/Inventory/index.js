import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ItemsList from '../../../../components/ItemsList';
import { httpGame } from '../../../../services/http';
import { setNotification } from '../../../../services/redux/ducks/notification';
import { setEquipItem, setSellItem } from './actions';

function Inventory({ inventorySellItem, inventoryEquipItem, setSellItemProps, setEquipItemProps, setNotificationError }) {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setNotificationError: (data) => dispatch(setNotification(data).error()),
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
