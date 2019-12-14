import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

it('should renter About Component', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
});
