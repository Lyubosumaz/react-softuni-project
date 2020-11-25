import { connect } from 'react-redux';
import { Fragment } from 'react';
import { httpGame } from '../../services/http';
import { currentPage } from '../../utils/currentPage';
import numberGenerator from '../../utils/numberGenerator';
import { toastInfo, toastError } from '../../utils/toastHandler';

function ItemsList(props) {
    console.log('here');
    const items = props.items;

    function getButtons(item) {
        let buttons;

        function handleBuy() {
            httpGame
                .buy(item._id)
                .then((res) => {
                    toastInfo(res);
                })
                .catch((err) => {
                    toastError(err);
                });
        }

        function handleSell() {
            httpGame
                .sell(item._id)
                .then((res) => {
                    toastInfo(res);
                    props.setSellItem();
                })
                .catch((err) => {
                    toastError(err);
                });
        }

        function handleEquip() {
            httpGame
                .equip(item._id)
                .then((res) => {
                    toastInfo(res);
                    props.setEquipItem();
                })
                .catch((err) => {
                    toastError(err);
                });
        }

        function handleRemove() {
            httpGame
                .remove(item._id)
                .then((res) => {
                    props.setRemoveItem();
                    toastInfo(res);
                })
                .catch((err) => {
                    toastError(err);
                });
        }

        switch (currentPage()) {
            case 'shop':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        <button className="active-button buy" onClick={handleBuy}>
                            Buy
                        </button>
                    </Fragment>
                );
                break;
            case 'inventory':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        <button className="active-button sell" onClick={handleSell}>
                            Sell
                        </button>
                        <button className="active-button" onClick={handleEquip}>
                            Equip
                        </button>
                    </Fragment>
                );
                break;
            case 'character':
                buttons = (
                    <Fragment key={numberGenerator()}>
                        <h3>Price: {item.price}</h3>
                        <button className="active-button remove" onClick={handleRemove}>
                            Remove
                        </button>
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
    };
}

export default connect(null, mapDispatchToProps)(ItemsList);
