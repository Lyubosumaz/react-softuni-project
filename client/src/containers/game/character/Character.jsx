import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setRemoveItem } from './actions';
import { httpGame } from '../../../services/http';
import { setNotification } from '../../../components/Notification/actions';
import MainStatistic from '../../../components/MainStatistic';
import ItemsList from '../../../components/ItemsList';

function Character({ characterRemoveItem, setRemoveItemProps, setNotificationError }) {
    const [items, setItems] = useState([]);
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        httpGame
            .character()
            .then((i) => {
                if (!i) {
                    return;
                }

                const allStats = i.reduce(
                    (a, b) => {
                        return {
                            strength: a.strength + b.strength,
                            agility: a.agility + b.agility,
                            intelligence: a.intelligence + b.intelligence,
                        };
                    },
                    { strength: 0, agility: 0, intelligence: 0 }
                );

                setItems(i);
                setStatistics(allStats);

                if (characterRemoveItem) {
                    setRemoveItemProps();
                }
            })
            .catch((err) => {
                setNotificationError(err);
            });
    }, [characterRemoveItem]);

    return (
        <div>
            <h1>Character</h1>

            {statistics && <MainStatistic content={statistics} />}

            <ItemsList items={items} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        characterRemoveItem: state.game.characterRemoveItem,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setRemoveItemProps: () => dispatch(setRemoveItem(false)),
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);

Character.propTypes = {
    characterRemoveItem: PropTypes.bool.isRequired,
    setRemoveItemProps: PropTypes.func.isRequired,
    setNotificationError: PropTypes.func.isRequired,
};
