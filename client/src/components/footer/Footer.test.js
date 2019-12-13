import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

it('Renter Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});