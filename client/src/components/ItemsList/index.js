import { PropTypes } from 'prop-types';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { httpGame } from '../../services/http';
import { setEquipItem, setRemoveItem, setSellItem } from '../../services/redux/ducks/menu';
import { setNotification } from '../../services/redux/ducks/notification';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';
import { currentPage } from '../../utils/pathHandler';
import { numberGenerator } from '../../utils/stringHandler';

function ItemsList({ items, setSellItemProps, setEquipItemProps, setRemoveItemProps, setNotificationInfo, setNotificationError }) {
    const initializedItemsListBtn = factoryButtons({ buttonStyles: buttonClass.ItemList });
    const itemsList = items;

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
                    setSellItemProps();
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
                    setEquipItemProps();
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
                    setRemoveItemProps();
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
        setSellItemProps: () => dispatch(setSellItem(true)),
        setEquipItemProps: () => dispatch(setEquipItem(true)),
        setRemoveItemProps: () => dispatch(setRemoveItem(true)),
        setNotificationInfo: (data) => dispatch(setNotification(data).info()),
        setNotificationError: (data) => dispatch(setNotification(data).error()),
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
    setSellItemProps: PropTypes.func.isRequired,
    setEquipItemProps: PropTypes.func.isRequired,
    setRemoveItemProps: PropTypes.func.isRequired,
    setNotificationInfo: PropTypes.func.isRequired,
    setNotificationError: PropTypes.func.isRequired,
};
