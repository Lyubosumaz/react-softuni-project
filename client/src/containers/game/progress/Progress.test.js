import React from 'react';
import { shallow } from 'enzyme';
import Progress from './Progress';

it('should renter Progress Component', () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper).toMatchSnapshot();
});
