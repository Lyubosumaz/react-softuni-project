export const generalActions = {
    MOVE_PLAYER: 'MOVE_PLAYER',
    RESET_PLAYER_LOCATION: 'RESET_PLAYER_LOCATION',
};

export const changeMovement = (newPos, direction, walkIndex, spriteLocation) => ({
    type: generalActions.MOVE_PLAYER,
    payload: {
        position: newPos,
        direction,
        walkIndex,
        spriteLocation,
    },
});

export const resetMovement = () => ({
    type: generalActions.RESET_PLAYER_LOCATION,
});
