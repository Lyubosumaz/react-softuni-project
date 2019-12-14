import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from '../../containers/login/reducer';
import OptionsBar from './OptionsBar';
import expect from 'expect';

describe('OptionsBar Component', () => {
    let getWrapper;
    beforeEach(() => {
        const mockStore = createStore(reducer, { user: { isLogin: true } });
        jest.mock('history', () => ({
            push: jest.fn(fn => fn()),
        }));
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <OptionsBar />
            </Provider>
        );
    });

    it('Renter OptionsBar', () => {
        const wrapper = getWrapper();
        expect(wrapper).toBeTruthy();
    });

    it('Checks for html changes', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
