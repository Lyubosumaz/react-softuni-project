import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import secondsToClock from '../../../../utils/secondsToClock';
import { setTimeValue } from './actions';

function Clock(props) {
    const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount((prevState) => prevState + 1);
    }, 1000);

    useEffect(() => {
        const newProp = { ...props };
        newProp.setTimeValue(count);
    });

    return (
        <div>
            <h1>
                Level: {props.level}, Time: {secondsToClock(count)}
            </h1>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        handleGameTimer: state.game.handleGameTimer,
        level: state.game.level,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setTimeValue: (data) => dispatch(setTimeValue(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
