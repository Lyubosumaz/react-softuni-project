export const generalActions = {
    ADD_NEW_NOTIFICATION: 'ADD_NEW_NOTIFICATION',
};

export const setNotification = (data) => ({
    type: generalActions.ADD_NEW_NOTIFICATION,
    payload: data,
});
