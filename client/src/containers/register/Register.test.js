import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

it('should renter Register Component', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
});
