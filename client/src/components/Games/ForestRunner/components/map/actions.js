export const generalActions = {
    ADD_TILES: 'ADD_TILES',
};

export const setTiles = (data) => ({
    type: generalActions.ADD_TILES,
    payload: data,
});
