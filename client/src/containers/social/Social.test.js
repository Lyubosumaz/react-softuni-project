import React from 'react';
import { shallow } from 'enzyme';
import Social from './Social';

it('should renter HouseOfFame Component', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper).toMatchSnapshot();
});
