const START_GAME_LEVEL = 'react-softuni-project/forest-runner/popup/START_GAME_LEVEL'; // START_THE_GAME

const initialState = {
    inGame: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case START_GAME_LEVEL:
            return {
                ...state,
                inGame: action.payload,
            };

        default:
            return state;
    }
}

export const setGameStart = () => ({
    type: START_GAME_LEVEL,
    payload: true,
});
