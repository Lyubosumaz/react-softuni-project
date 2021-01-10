export const generalActions = {
    SET_TIME: 'SET_TIME',
};

export const setTimeValue = (data) => ({
    type: generalActions.SET_TIME,
    payload: data,
});
