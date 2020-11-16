import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import secondsToClock from '../../../../utils/secondsToClock';
import { setTimeValue } from './actions';

function Clock(props) {
    const newProp = props;
    const [count, setCount] = useState(0);

    // TODO
    useEffect(() => {
        let interval = null;

        interval = setTimeout(() => {
            setCount((prevState) => prevState + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {
        newProp.setTimeValue(count);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newProp]);

    return (
        <div>
            <h1>
                Level: {newProp.level}, Time: {secondsToClock(count)}
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
