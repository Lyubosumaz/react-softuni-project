const SET_GAME_TIMER = 'react-softuni-project/forest-runner/game/SET_GAME_TIMER'; // GAME_TIMER_STATE :popup have some need fix
const SET_TIME = 'react-softuni-project/forest-runner/game/SET_TIME';

const initialState = {
    handleGameTimer: false,
    time: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_GAME_TIMER:
            return {
                ...state,
                handleGameTimer: action.payload,
            };
        case SET_TIME:
            return {
                ...state,
                time: action.payload,
            };
        default:
            return state;
    }
}

export const setGameTimer = () => {
    return {
        start: () => ({
            type: SET_GAME_TIMER,
            payload: true,
        }),
        stop: () => ({
            type: SET_GAME_TIMER,
            payload: false,
        }),
    };
};

export const setTime = (data) => ({
    type: SET_TIME,
    payload: data,
});
