import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('should renter Home Component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});
