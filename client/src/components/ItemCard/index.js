import { connect } from 'react-redux';
import { Fragment } from 'react';
import { httpGame } from '../../services/http';
import { currentPage } from '../../utils/currentPage';
import numberGenerator from '../../utils/numberGenerator';
import { toast } from 'react-toastify';

function ItemCard(props) {
    const item = props.item;
    let buttons;

    function handleBuy() {
        httpGame
            .buy(item._id)
            .then((res) => {
                toast(res.message, {
                    type: toast.TYPE.INFO,
                });
            })
            .catch((err) => {
                toast(err.message, {
                    type: toast.TYPE.ERROR,
                });
            });
    }

    function handleSell() {
        httpGame
            .sell(item._id)
            .then((res) => {
                toast(res.message, {
                    type: toast.TYPE.INFO,
                });
                props.setSellItem();
            })
            .catch((err) => {
                toast(err.message, {
                    type: toast.TYPE.ERROR,
                });
            });
    }

    function handleEquip() {
        httpGame
            .equip(item._id)
            .then((res) => {
                toast(res.message, {
                    type: toast.TYPE.INFO,
                });
                props.setEquipItem();
            })
            .catch((err) => {
                toast(err.message, {
                    type: toast.TYPE.ERROR,
                });
            });
    }

    function handleRemove() {
        httpGame
            .remove(item._id)
            .then((res) => {
                props.setRemoveItem();
                toast(res.message, {
                    type: toast.TYPE.INFO,
                });
            })
            .catch((err) => {
                toast(err.message, {
                    type: toast.TYPE.ERROR,
                });
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

    return (
        // <div className={styleClass ? styleClass : 'item-card'}>
        <div className="item-card">
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

                    <div>{buttons}</div>
                </div>
            </div>
        </div>
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

export default connect(null, mapDispatchToProps)(ItemCard);
