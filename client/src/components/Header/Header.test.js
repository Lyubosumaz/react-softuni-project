import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducer from '../../containers/login/reducer';
// import Header from './Header';

describe('Header Component', () => {
    let getWrapper;
    beforeEach(() => {
        const mockStore = createStore(reducer, { user: { isLogin: true } });
        jest.mock('history', () => ({
            push: jest.fn(fn => fn()),
        }));
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <Header />
            </Provider>
        );
    });

    it('should renter Header Component', () => {
        const wrapper = getWrapper();
        expect(wrapper).toBeTruthy();
    });

    it('should checks for html changes', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
