import reducer from './reducer';

describe('Login reducer', () => {
    const initialState = {
        isLogin: false,
        userId: null,
        userName: ''
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            isLogin: false,
            userId: null,
            userName: ''
        });
    });

    it('should handle USER_LOGGED_IN', () => {
        expect(
            reducer(initialState, {
                type: 'USER_LOGGED_IN',
                payload: {
                    _id: 'test1',
                    username: 'test2',
                }
            }))
            .toEqual({
                isLogin: true,
                userId: 'test1',
                userName: 'test2'
            });
    });

    it('should handle USER_LOGGED_OUT', () => {
        expect(
            reducer(initialState, {
                type: 'USER_LOGGED_OUT',
            }))
            .toEqual({
                isLogin: false,
                userId: null,
                userName: ''
            });
    });
});
