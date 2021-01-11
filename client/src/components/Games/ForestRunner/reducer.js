import { generalActions } from './actions';

const initialState = {
    inGame: false,
    gold: 0,
    item: [],
    time: 0,
    handleGameTimer: false,
    level: 1,
    gameItems: [],
    inventorySellItem: false,
    inventoryEquipItem: false,
    characterRemoveItem: false,
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        // { FINISH_GAME_LEVEL, OPEN_GOLD_CHEST, OPEN_ITEM_CHEST, SET_GAME_TIMER}: HandleMovement component
        case generalActions.FINISH_GAME_LEVEL:
            return {
                ...state,
                inGame: action.payload,
                // TODO this value is hardcoded need logic for next levels
                level: 2,
            };
        case generalActions.OPEN_GOLD_CHEST:
            return {
                ...state,
                gold: (state.gold += action.payload),
            };
        case generalActions.OPEN_ITEM_CHEST:
            return {
                ...state,
                item: state.item.concat(action.payload),
            };
        case generalActions.SET_GAME_TIMER:
            return {
                ...state,
                handleGameTimer: action.payload === 'start' ? true : false,
            };
        case 'SAVE_GAME_ITEMS_LOOT':
            return {
                ...state,
                gameItems: action.payload,
            };
        case 'SET_TIME':
            return {
                ...state,
                time: action.payload,
            };
        case 'START_THE_GAME':
            return {
                ...state,
                inGame: action.payload,
            };
        case 'RESET_GAME_LEVEL':
            return {
                ...state,
                gold: 0,
                item: [],
                time: 0,
            };
        case 'CHARACTER_SELL_ITEM':
            return {
                ...state,
                inventorySellItem: action.payload,
            };
        case 'CHARACTER_EQUIP_ITEM':
            return {
                ...state,
                inventoryEquipItem: action.payload,
            };
        case 'CHARACTER_REMOVE_ITEM':
            return {
                ...state,
                characterRemoveItem: action.payload,
            };
        default:
            return state;
    }
};

export default gameReducer;
