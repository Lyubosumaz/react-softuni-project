const initialState = {
    position: [0, 0],
    spriteLocation: '0px 0px',
    default: 'EAST',
    walkIndex: 0,
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PLAYER':
            return {
                ...state,
                ...action.payload,
            }
        case 'RESET_PLAYER_LOCATION':
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    };
};

export default playerReducer;