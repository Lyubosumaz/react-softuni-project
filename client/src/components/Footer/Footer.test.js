import { shallow } from 'enzyme';
// import Footer from './Footer';

it('should renter Footer Component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});
