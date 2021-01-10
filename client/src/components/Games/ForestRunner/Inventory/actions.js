export const generalActions = {
    CHARACTER_SELL_ITEM: 'CHARACTER_SELL_ITEM',
    CHARACTER_EQUIP_ITEM: 'CHARACTER_EQUIP_ITEM',
};

export const setSellItem = (data) => ({
    type: generalActions.CHARACTER_SELL_ITEM,
    payload: data,
});

export const setEquipItem = (data) => ({
    type: generalActions.CHARACTER_EQUIP_ITEM,
    payload: data,
});