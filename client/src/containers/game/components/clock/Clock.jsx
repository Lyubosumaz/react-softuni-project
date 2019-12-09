import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Clock(props) {
    const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount(prevState => (prevState + 1))
    }, 1000)

    useEffect(() => {
        console.log(!props.inGame)
        props.setTimeValue(count);
        if (!props.inGame) {
            console.log(count)
        }
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        inGame: state.game.inGame,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setTimeValue: (data) => dispatch({
            type: 'GET_TIME',
            payload: data,
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);