import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from '../login/reducer';
import HouseOfFame from './HouseOfFame';

describe('HouseOfFame Component', () => {
    let getWrapper;
    beforeEach(() => {
        const mockStore = createStore(reducer, { user: { isLogin: true } });
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <HouseOfFame />
            </Provider>
        );
    });

    it('Renter HouseOfFame', () => {
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
