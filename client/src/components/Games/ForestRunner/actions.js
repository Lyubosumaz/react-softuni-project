export const generalActions = {
    FINISH_GAME_LEVEL: 'FINISH_GAME_LEVEL',
    RESET_GAME_LEVEL: 'RESET_GAME_LEVEL',
    SAVE_GAME_ITEMS: 'SAVE_GAME_ITEMS',
    SET_TIME: 'SET_TIME',
    START_GAME_LEVEL: 'START_GAME_LEVEL', // START_THE_GAME
    GAME_TIMER_STATE: 'GAME_TIMER_STATE',
};

// functions used in HandleMovement component
export const finishGameLevel = () => ({
    type: generalActions.FINISH_GAME_LEVEL,
    payload: false,
});

// functions used in ForestRunner component
export const resetGameLevel = () => ({
    type: generalActions.RESET_GAME_LEVEL,
});

export const saveGameItems = (data) => ({
    type: generalActions.SAVE_GAME_ITEMS,
    payload: data,
});

// functions used in GamePopup component
export const setGameStart = () => ({
    type: generalActions.START_GAME_LEVEL,
    payload: true,
});
