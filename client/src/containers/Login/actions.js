export const generalActions = {
    USER_LOGGED_IN: 'USER_LOGGED_IN',
    USER_LOGGED_OUT: 'USER_LOGGED_OUT',
};

export const setLoginValue = (data) => ({
    type: generalActions.USER_LOGGED_IN,
    payload: data,
});

export const setLogoutValue = () => ({
    type: generalActions.USER_LOGGED_OUT,
});