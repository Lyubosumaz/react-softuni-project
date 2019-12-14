import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from '../reducer';
import Character from './Character';

describe('Character Component', () => {
    let getWrapper;
    beforeEach(() => {
        const mockStore = createStore(reducer, {
            user: {
                userName: 'test'
            },
            game: {
                characterRemoveItem: false
            }
        });
        jest.mock('history', () => ({
            push: jest.fn(fn => fn()),
        }));
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <Character />
            </Provider>
        );
    });

    it('Renter Character', () => {
        const wrapper = getWrapper();
        expect(wrapper).toBeTruthy();
    });

    it('Checks for html changes', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
