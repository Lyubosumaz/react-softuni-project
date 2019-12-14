import React from 'react';
import { shallow } from 'enzyme';
import Shop from './Shop';

it('Renter Shop component', () => {
    const wrapper = shallow(<Shop />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<Shop />);
    expect(wrapper).toMatchSnapshot();
});
