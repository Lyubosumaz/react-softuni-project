import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MainStatistic from '../../../components/MainStatistic';
import ItemCard from '../../../components/ItemCard';
import { httpGame } from '../../../services/http';
import './character.css';
import { setRemoveItem } from './actions';
import { toastError } from '../../../utils/toastHandler';

function Character(props) {
    const newProps = props;
    const [items, setItems] = useState([]);
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        httpGame
            .character()
            .then((c) => {
                if (!c) {
                    return;
                }
                const allStats = c.reduce(
                    (a, b) => {
                        return {
                            strength: a.strength + b.strength,
                            agility: a.agility + b.agility,
                            intelligence: a.intelligence + b.intelligence,
                        };
                    },
                    { strength: 0, agility: 0, intelligence: 0 }
                );

                setItems(c);
                setStatistics(allStats);

                if (newProps.characterRemoveItem) {
                    newProps.setRemoveItem();
                }
            })
            .catch((err) => {
                toastError(err);
            });
    }, [newProps]);

    return (
        <div>
            <h1>Character</h1>

            {statistics && <MainStatistic content={statistics} />}

            <div className="item-card-container">
                <div className="item-card-card">
                    {items &&
                        items.map((item, index) => {
                            return <ItemCard key={index} item={item} />;
                        })}
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
        characterRemoveItem: state.game.characterRemoveItem,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setRemoveItem: () => dispatch(setRemoveItem(false)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);
