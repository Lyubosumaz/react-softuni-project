import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { httpGame } from '../../../services/http';
import { setNotification } from '../../../components/Notification/actions';
import ItemsList from '../../../components/ItemsList';

function Shop(props) {
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
                props.setNotificationError(err);
            });
    }, []);

    return (
        <div>
            <h1>Shop</h1>

            <ItemsList items={items} />
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(null, mapDispatchToProps)(Shop);
