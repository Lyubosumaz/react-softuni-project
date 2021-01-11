import { shallow } from 'enzyme';
import FourOFour from './404';

it('should renter 404 Component', () => {
    const wrapper = shallow(<FourOFour />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<FourOFour />);
    expect(wrapper).toMatchSnapshot();
});
