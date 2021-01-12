import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { saveTime } from '../../services/redux/ducks/timer';
import { secondsToClock } from '../../utils/stringHandler';

function Timer({ isTimerOn, level, saveTimeProps }) {
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
        saveTimeProps(count);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTimerOn]);

    return (
        <div>
            <h1>
                Level: {level}, Time: {secondsToClock(count)}
            </h1>
        </div>
    );
}

function mapStateToProps(state) {
    console.log(state);
    return {
        isTimerOn: state.timer.isTimerOn,
        level: state.game.level,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveTimeProps: (data) => dispatch(saveTime(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
    isTimerOn: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    saveTimeProps: PropTypes.func.isRequired,
};
