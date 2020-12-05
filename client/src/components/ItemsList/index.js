import { connect } from 'react-redux';
import { Fragment } from 'react';
import { httpGame } from '../../services/http';
import { currentPage } from '../../utils/currentPage';
import { numberGenerator } from '../../utils/numberGenerator';
import { setNotification } from '../Notification/actions';
import Button from '../Button';

function ItemsList(props) {
    const items = props.items;

    function getButtons(item) {
        let buttons;

        function handleBuy() {
            httpGame
                .buy(item._id)
                .then((res) => {
                    props.setNotificationInfo(res);
                })
                .catch((err) => {
                    props.setNotificationError(err);
                });
        }

        function handleSell() {
            httpGame
                .sell(item._id)
                .then((res) => {
                    props.setNotificationInfo(res);
                    props.setSellItem();
                })
                .catch((err) => {
                    props.setNotificationError(err);
                });
        }

        function handleEquip() {
            httpGame
                .equip(item._id)
                .then((res) => {
                    props.setNotificationInfo(res);
                    props.setEquipItem();
                })
                .catch((err) => {
                    props.setNotificationError(err);
                });
        }

        function handleRemove() {
            httpGame
                .remove(item._id)
                .then((res) => {
                    props.setNotificationInfo(res);
                    props.setRemoveItem();
                })
                .catch((err) => {
                    props.setNotificationError(err);
                });
        }

        switch (currentPage()) {
            case 'shop':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        <Button additionalClassName="active-button buy" buttonText="Buy" functionPressButton={handleBuy} />
                    </Fragment>
                );
                break;
            case 'inventory':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        <Button additionalClassName="active-button sell" buttonText="Sell" functionPressButton={handleSell} />
                        <Button additionalClassName="active-button sell" buttonText="Equip" functionPressButton={handleEquip} />
                    </Fragment>
                );
                break;
            case 'character':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        <Button additionalClassName="active-button remove" buttonText="Remove" functionPressButton={handleRemove} />
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
            {items &&
                items.map((item, index) => {
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
