import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from '../reducer';
import Inventory from './Inventory';

describe('Inventory Component', () => {
    let getWrapper;
    beforeEach(() => {
        const mockStore = createStore(reducer, {
            game: {
                inventorySellItem: false,
                inventoryEquipItem: false
            }
        });
        jest.mock('history', () => ({
            push: jest.fn(fn => fn()),
        }));
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <Inventory />
            </Provider>
        );
    });

    it('Renter Inventory', () => {
        const wrapper = getWrapper();
        expect(wrapper).toBeTruthy();
    });

    it('Checks for html changes', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
