import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import secondsToClock from '../../../../utils/secondsToClock';

function Clock(props) {
    const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount(prevState => (prevState + 1))
    }, 1000);

    useEffect(() => {
        props.setTimeValue(count);
    }, [props.handleGameTimer]);

    return (
        <div>
            <h1>Level: {props.level}, Time: {secondsToClock(count)}</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        handleGameTimer: state.game.handleGameTimer,
        level: state.game.level,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setTimeValue: (data) => dispatch({
            type: 'SET_TIME',
            payload: data,
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);