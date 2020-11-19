import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from '../../login/reducer';
import AddMeme from './AddMeme';

describe('AddMeme Component', () => {
    let getWrapper;
    beforeEach(() => {
        const mockStore = createStore(reducer, { user: { isLogin: true } });
        jest.mock('history', () => ({
            push: jest.fn(fn => fn()),
        }));
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <AddMeme />
            </Provider>
        );
    });

    it('should renter AddMeme Component', () => {
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
