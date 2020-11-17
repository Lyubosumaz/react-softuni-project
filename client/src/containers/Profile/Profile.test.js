import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from '../game/reducer';
import Profile from './Profile';

describe('Profile Component', () => {
    let getWrapper;
    beforeEach(() => {
        const mockStore = createStore(reducer, { user: { userName: 'test' } });
        jest.mock('history', () => ({
            push: jest.fn(fn => fn()),
        }));
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <Profile />
            </Provider>
        );
    });

    it('should renter Profile Component', () => {
        const wrapper = getWrapper();
        expect(wrapper).toBeTruthy();
    });

    it('should render without errors main-container', () => {
        const wrapper = getWrapper().find('.main-container');
        expect(wrapper.length).toBe(1);
    });

    it('should checks for html changes', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
