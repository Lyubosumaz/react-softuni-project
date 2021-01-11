export const generalActions = {
    FINISH_GAME_LEVEL: 'FINISH_GAME_LEVEL',
    GAME_TIMER_STATE: 'GAME_TIMER_STATE',
    OPEN_GOLD_CHEST: 'OPEN_GOLD_CHEST',
    OPEN_ITEM_CHEST: 'OPEN_ITEM_CHEST',
};

export const finishGameLevel = () => ({
    type: generalActions.FINISH_GAME_LEVEL,
    payload: false,
});

// doesn't have case yet
export const startGameTimer = () => ({
    type: generalActions.GAME_TIMER_STATE,
    payload: true,
});

export const stopGameTimer = () => ({
    type: generalActions.GAME_TIMER_STATE,
    payload: false,
});

export const openGoldChest = (data) => ({
    type: generalActions.OPEN_GOLD_CHEST,
    payload: data,
});

export const openItemChest = (data) => ({
    type: generalActions.OPEN_ITEM_CHEST,
    payload: data,
});
