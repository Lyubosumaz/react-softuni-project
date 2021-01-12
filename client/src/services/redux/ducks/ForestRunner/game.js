const FINISH_GAME_LEVEL = 'react-softuni-project/forest-runner/game/FINISH_GAME_LEVEL';
const RESET_GAME_LEVEL = 'react-softuni-project/forest-runner/game/RESET_GAME_LEVEL';
const SAVE_GAME_ITEMS = 'react-softuni-project/forest-runner/game/SAVE_GAME_ITEMS';

const initialState = {
    gold: 0,
    item: [],
    level: 1,
    gameItems: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FINISH_GAME_LEVEL:
            return {
                ...state,
                inGame: action.payload,
                // TODO this value is hardcoded need logic for next levels
                level: 2,
            };
        case RESET_GAME_LEVEL:
            return {
                ...state,
                gold: 0,
                item: [],
                time: 0,
            };
        case SAVE_GAME_ITEMS:
            return {
                ...state,
                gameItems: action.payload,
            };
        default:
            return state;
    }
}

export const finishGameLevel = () => ({
    type: FINISH_GAME_LEVEL,
    payload: false,
});

export const resetGameLevel = () => ({
    type: RESET_GAME_LEVEL,
});

export const saveGameItems = (data) => ({
    type: SAVE_GAME_ITEMS,
    payload: data,
});
