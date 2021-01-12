const GAME_START_LEVEL = 'react-softuni-project/forest-runner/game/start-lever';
const GAME_FINISH_LEVEL = 'react-softuni-project/forest-runner/game/finish-level';
const GAME_RESET_LEVEL = 'react-softuni-project/forest-runner/game/reset-level';
const GAME_SAVE_ITEMS = 'react-softuni-project/forest-runner/game/save-game';

const initialState = {
    fetchedAllItems: [],
    inGame: false,
    gold: 0,
    item: [],
    level: 1,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // TODO saves all game items in redux store, then used in open chest to get random item
        case GAME_SAVE_ITEMS:
            return {
                ...state,
                gameItems: action.payload,
            };
        case GAME_START_LEVEL:
            return {
                ...state,
                inGame: action.payload,
            };
        case GAME_FINISH_LEVEL:
            return {
                ...state,
                inGame: action.payload,
                // TODO this value is hardcoded need logic for next levels
                level: 2,
            };
        case GAME_RESET_LEVEL:
            return {
                ...state,
                gold: 0,
                item: [],
                time: 0,
            };

        default:
            return state;
    }
}

export function setGameStart() {
    return {
        type: GAME_START_LEVEL,
        payload: true,
    };
}

export function finishGameLevel() {
    return {
        type: GAME_FINISH_LEVEL,
        payload: false,
    };
}

export function resetGameLevel() {
    return { type: GAME_RESET_LEVEL };
}

export function saveGameItems(data) {
    return {
        type: GAME_SAVE_ITEMS,
        payload: data,
    };
}
