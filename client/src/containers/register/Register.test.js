import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

it('Renter Register component', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
});
