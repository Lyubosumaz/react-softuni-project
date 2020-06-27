export const generalActions = {
    USER_LOGGED_IN: 'USER_LOGGED_IN',
};

export const setLoginValue = (data) => ({
    type: generalActions.USER_LOGGED_IN,
    payload: data,
});