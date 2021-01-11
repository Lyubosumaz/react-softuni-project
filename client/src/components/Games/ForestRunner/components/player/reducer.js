import { generalActions } from './actions';

const initialState = {
    position: [0, 0],
    default: 'EAST',
    walkIndex: 0,
    spriteLocation: '0px 0px',
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalActions.MOVE_PLAYER:
            return {
                ...state,
                ...action.payload,
            };
        case generalActions.RESET_PLAYER_LOCATION:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
};

export default playerReducer;
