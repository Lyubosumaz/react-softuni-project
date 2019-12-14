import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from './reducer';
import Login from './Login';
import expect from 'expect';

describe('Login Component', () => {
    let getWrapper;
    beforeEach(() => {
        const mockStore = createStore(reducer, { user: { isLogin: true } });
        jest.mock('history', () => ({
            push: jest.fn(fn => fn()),
        }));
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <Login />
            </Provider>
        );
    });

    it('Renter Login', () => {
        const wrapper = getWrapper();
        expect(wrapper).toBeTruthy();
    });

    it('Should render without errors main-container', () => {
        const wrapper = getWrapper().find('.main-container');
        expect(wrapper.length).toBe(1);
    });

    it('Checks for html changes', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
