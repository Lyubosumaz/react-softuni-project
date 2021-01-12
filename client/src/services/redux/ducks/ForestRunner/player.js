const PLAYER_SET_MOVEMENT = 'react-softuni-project/forest-runner/player/set-movement';
const PLAYER_RESET_LOCATION = 'react-softuni-project/forest-runner/player/reset-location';

const initialState = {
    position: [0, 0],
    default: 'EAST',
    walkIndex: 0,
    spriteLocation: '0px 0px',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PLAYER_SET_MOVEMENT:
            return {
                ...state,
                ...action.payload,
            };
        case PLAYER_RESET_LOCATION:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
}

export function setMovement(newPos, direction, walkIndex, spriteLocation) {
    return {
        type: PLAYER_SET_MOVEMENT,
        payload: {
            position: newPos,
            direction,
            walkIndex,
            spriteLocation,
        },
    };
}

export function resetLocation() {
    return { type: PLAYER_RESET_LOCATION };
}
