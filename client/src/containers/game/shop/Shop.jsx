import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { httpGame } from '../../../services/http';
import { setNotification } from '../../../components/Notification/actions';
import ItemsList from '../../../components/ItemsList';

function Shop({ setNotificationError }) {
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
                setNotificationError(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

Shop.propTypes = {
    setNotificationError: PropTypes.func.isRequired,
};
