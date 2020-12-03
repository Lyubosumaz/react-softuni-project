export const generalActions = {
    ADD_NEW_NOTIFICATION: 'ADD_NEW_NOTIFICATION',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
};

export const setNotification = (data) => ({
    type: generalActions.ADD_NEW_NOTIFICATION,
    payload: data,
});

export const removeNotification = (data) => ({
    type: generalActions.REMOVE_NOTIFICATION,
    payload: data,
});
