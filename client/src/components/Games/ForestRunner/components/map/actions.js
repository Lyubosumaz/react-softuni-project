export const generalActions = {
    SET_TILES: 'SET_TILES',
};

export const setTiles = (data) => ({
    type: generalActions.SET_TILES,
    payload: data,
});
