const initialState = {
    inGame: false,
    final: false,
    gold: 0,
    item: [],
    time: 0,
    level: 1,
    gameItems: [],
    inventorySellItem: false,
    inventoryEquipItem: false,
    characterRemoveItem: false
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_GAME_ITEMS':
            return {
                ...state,
                gameItems: action.payload,
            }
        case 'START':
            return {
                ...state,
                inGame: action.payload,
            }
        case 'OPEN_GOLD_CHEST':
            return {
                ...state,
                gold: state.gold += action.payload,
            };
        case 'OPEN_ITEM_CHEST':
            return {
                ...state,
                item: state.item.concat(action.payload),
            };
        case 'GET_TIME':
            return {
                ...state,
                time: action.payload,
            };
        case 'FINAL':
            return {
                ...state,
                inGame: action.payload,
                level: 2,
            };
        case 'RESET_GAME':
            return {
                ...state,
                final: false,
                gold: 0,
                item: [],
                time: 0,
                // level: 1
            };
        case 'CHARACTER_SELL_ITEM':
            return {
                ...state,
                inventorySellItem: action.payload
            };
        case 'CHARACTER_EQUIP_ITEM':
            return {
                ...state,
                inventoryEquipItem: action.payload
            };
        case 'CHARACTER_REMOVE_ITEM':
            return {
                ...state,
                characterRemoveItem: action.payload
            };
        default:
            return state;
    };
};

export default gameReducer;