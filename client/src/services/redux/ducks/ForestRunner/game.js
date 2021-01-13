const GAME_START_LEVEL = 'react-softuni-project/forest-runner/game/start-lever';
const GAME_FINISH_LEVEL = 'react-softuni-project/forest-runner/game/finish-level';
const GAME_RESET_LEVEL = 'react-softuni-project/forest-runner/game/reset-level';
const GAME_NEXT_LEVEL = 'react-softuni-project/forest-runner/game/next-level';
const GAME_SAVE_ITEMS = 'react-softuni-project/forest-runner/game/save-game';
const GAME_OPEN_GOLD_CHEST = 'react-softuni-project/forest-runner/game/open-gold-chest';
const GAME_OPEN_ITEM_CHEST = 'react-softuni-project/forest-runner/game/open-item-chest';

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
            };
        case GAME_RESET_LEVEL:
            return {
                ...state,
                gold: 0,
                item: [],
            };
        case GAME_NEXT_LEVEL:
            return {
                ...state,
                level: typeof action.payload === 'number' ? (action.payload++ >= 3 ? 1 : action.payload++) : 1,
            };
        case GAME_OPEN_GOLD_CHEST:
            return {
                ...state,
                gold: (state.gold += action.payload),
            };
        case GAME_OPEN_ITEM_CHEST:
            return {
                ...state,
                item: state.item.concat(action.payload),
            };
        default:
            return state;
    }
}

export function startLevel() {
    return {
        type: GAME_START_LEVEL,
        payload: true,
    };
}

export function finishLevel() {
    return {
        type: GAME_FINISH_LEVEL,
        payload: false,
    };
}

export function resetLevel() {
    return { type: GAME_RESET_LEVEL };
}

export function nextLevel(data) {
    return {
        type: GAME_NEXT_LEVEL,
        payload: data,
    };
}

export function saveItems(data) {
    return {
        type: GAME_SAVE_ITEMS,
        payload: data,
    };
}

export function openGoldChest(data) {
    return {
        type: GAME_OPEN_GOLD_CHEST,
        payload: data,
    };
}

export function openItemChest(data) {
    return {
        type: GAME_OPEN_ITEM_CHEST,
        payload: data,
    };
}
