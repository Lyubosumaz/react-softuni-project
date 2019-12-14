import React from 'react';
import { shallow } from 'enzyme';
import Shop from './Shop';

it('should renter Shop Component', () => {
    const wrapper = shallow(<Shop />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<Shop />);
    expect(wrapper).toMatchSnapshot();
});
