export const generalActions = {
    START_THE_GAME: 'START_THE_GAME',
    GAME_TIMER_STATE: 'GAME_TIMER_STATE',
};


export const setGameStart = () => ({
    type: 'START_THE_GAME',
    payload: true,
});

export const setGameTimer = () => ({
    type: 'GAME_TIMER_STATE',
    payload: true,
});
