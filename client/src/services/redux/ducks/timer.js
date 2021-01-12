const TIMER_SET_STATE = 'react-softuni-project/forest-runner/timer/set-state';
const TIMER_SET_TIME = 'react-softuni-project/forest-runner/timer/save-time';

const initialState = {
    isTimerOn: false,
    time: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TIMER_SET_STATE:
            return {
                ...state,
                isTimerOn: action.payload,
            };
        case TIMER_SET_TIME:
            return {
                ...state,
                time: action.payload,
            };
        default:
            return state;
    }
}

export function setTimerState() {
    const action = {
        type: TIMER_SET_STATE,
    };

    return {
        start: () => ({ ...action, ...(action.payload = true) }),
        stop: () => ({ ...action, ...(action.payload = false) }),
    };
}

export function setTime(data) {
    return {
        type: TIMER_SET_TIME,
        payload: data,
    };
}
