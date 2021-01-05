import { connect } from 'react-redux';
import { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { httpGame } from '../../services/http';
import { currentPage } from '../../utils/currentPage';
import { numberGenerator } from '../../utils/numberGenerator';
import { factoryButtons } from '../../utils/factory';
import { setNotification } from '../Notification/actions';

function ItemsList({ items, setSellItem, setEquipItem, setRemoveItem, setNotificationInfo, setNotificationError }) {
    const itemsList = items;

    const itemsListAttributes = { buttonStyles: 'active-button' };
    const initializedItemsListBtn = factoryButtons(itemsListAttributes);

    function getButtons(item) {
        let buttons;

        function handleBuy() {
            httpGame
                .buy(item._id)
                .then((res) => {
                    setNotificationInfo(res);
                })
                .catch((err) => {
                    setNotificationError(err);
                });
        }

        function handleSell() {
            httpGame
                .sell(item._id)
                .then((res) => {
                    setNotificationInfo(res);
                    setSellItem();
                })
                .catch((err) => {
                    setNotificationError(err);
                });
        }

        function handleEquip() {
            httpGame
                .equip(item._id)
                .then((res) => {
                    setNotificationInfo(res);
                    setEquipItem();
                })
                .catch((err) => {
                    setNotificationError(err);
                });
        }

        function handleRemove() {
            httpGame
                .remove(item._id)
                .then((res) => {
                    setNotificationInfo(res);
                    setRemoveItem();
                })
                .catch((err) => {
                    setNotificationError(err);
                });
        }

        switch (currentPage()) {
            case 'shop':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        {initializedItemsListBtn(null, 'Buy', 'buy', handleBuy)}
                    </Fragment>
                );
                break;
            case 'inventory':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        {initializedItemsListBtn(null, 'Sell', 'sell', handleSell)}
                        {initializedItemsListBtn(null, 'Equip', 'equip', handleEquip)}
                    </Fragment>
                );
                break;
            case 'character':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        {initializedItemsListBtn(null, 'Remove', 'remove', handleRemove)}
                    </Fragment>
                );
                break;
            default:
                break;
        }

        return buttons;
    }

    return (
        <ul className="items-list-component">
            {itemsList &&
                itemsList.map((item, index) => {
                    return (
                        <li key={index} className="item-card">
                            <div className="item-card-inner">
                                <div className="item-card-front">
                                    <img src={item.imageUrl} alt="Avatar" />
                                </div>

                                <div className="item-card-back">
                                    <h1>{item.itemName}</h1>

                                    <div>
                                        <h3>Statistics:</h3>
                                        <p>Strength: {item.strength}</p>
                                        <p>Agility: {item.agility}</p>
                                        <p>Intelligence: {item.intelligence}</p>
                                    </div>

                                    <div>{getButtons(item)}</div>
                                </div>
                            </div>
                        </li>
                    );
                })}
        </ul>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setSellItem: () =>
            dispatch({
                type: 'CHARACTER_SELL_ITEM',
                payload: true,
            }),
        setEquipItem: () =>
            dispatch({
                type: 'CHARACTER_EQUIP_ITEM',
                payload: true,
            }),
        setRemoveItem: () =>
            dispatch({
                type: 'CHARACTER_REMOVE_ITEM',
                payload: true,
            }),
        setNotificationInfo: (data) => dispatch(setNotification().info(data)),
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(null, mapDispatchToProps)(ItemsList);

ItemsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            _id: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            itemName: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            strength: PropTypes.number.isRequired,
            agility: PropTypes.number.isRequired,
            intelligence: PropTypes.number.isRequired,
            __v: PropTypes.number.isRequired,
        }).isRequired
    ),
    setSellItem: PropTypes.func.isRequired,
    setEquipItem: PropTypes.func.isRequired,
    setRemoveItem: PropTypes.func.isRequired,
    setNotificationInfo: PropTypes.func.isRequired,
    setNotificationError: PropTypes.func.isRequired,
};
