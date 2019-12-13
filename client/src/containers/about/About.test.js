import React from 'react';
import About from './About';
import { shallow } from 'enzyme';

it('renter About component', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toBeTruthy();
});

it('checks for html changes', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
});