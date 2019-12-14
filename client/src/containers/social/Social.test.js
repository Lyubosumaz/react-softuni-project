import React from 'react';
import { shallow } from 'enzyme';
import Social from './Social';

it('Renter HouseOfFame component', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper).toMatchSnapshot();
});
