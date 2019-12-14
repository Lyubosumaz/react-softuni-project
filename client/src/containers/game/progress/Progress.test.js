import React from 'react';
import { shallow } from 'enzyme';
import Progress from './Progress';

it('Renter Progress component', () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toMatchSnapshot();
});
