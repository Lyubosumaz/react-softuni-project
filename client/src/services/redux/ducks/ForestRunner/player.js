const PLAYER_MOVEMENT = 'react-softuni-project/forest-runner/player/movement';
const PLAYER_RESET_LOCATION = 'react-softuni-project/forest-runner/player/reset-location';

const initialState = {
    position: [0, 0],
    default: 'EAST',
    walkIndex: 0,
    spriteLocation: '0px 0px',
};

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case PLAYER_MOVEMENT:
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

export function changeMovement(newPos, direction, walkIndex, spriteLocation) {
    return {
        type: PLAYER_MOVEMENT,
        payload: {
            position: newPos,
            direction,
            walkIndex,
            spriteLocation,
        },
    };
}

export function resetPlayerLocation() {
    return { type: PLAYER_RESET_LOCATION };
}
