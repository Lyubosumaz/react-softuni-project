import { shallow } from 'enzyme';
import TermsAndConditions from './TermsAndConditions';

it('should renter HouseOfFame Component', () => {
    const wrapper = shallow(<TermsAndConditions />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<TermsAndConditions />);
    expect(wrapper).toMatchSnapshot();
});
