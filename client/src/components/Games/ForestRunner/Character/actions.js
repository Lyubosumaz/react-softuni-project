export const generalActions = {
    CHARACTER_REMOVE_ITEM: 'CHARACTER_REMOVE_ITEM',
};

export const setRemoveItem = (data) => ({
    type: generalActions.CHARACTER_REMOVE_ITEM,
    payload: data,
});