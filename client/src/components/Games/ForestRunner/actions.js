export const generalActions = {
    FINISH_GAME_LEVEL: 'FINISH_GAME_LEVEL',
    SET_GAME_TIMER: 'SET_GAME_TIMER', // GAME_TIMER_STATE
    OPEN_GOLD_CHEST: 'OPEN_GOLD_CHEST',
    OPEN_ITEM_CHEST: 'OPEN_ITEM_CHEST',
};

// functions used in HandleMovement component
export const finishGameLevel = () => ({
    type: generalActions.FINISH_GAME_LEVEL,
    payload: false,
});

export const setGameTimer = (data) => ({
    type: generalActions.SET_GAME_TIMER,
    payload: data,
});

export const openGoldChest = (data) => ({
    type: generalActions.OPEN_GOLD_CHEST,
    payload: data,
});

export const openItemChest = (data) => ({
    type: generalActions.OPEN_ITEM_CHEST,
    payload: data,
});
