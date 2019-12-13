import React from 'react';
import FourOFour from './404';
import { shallow } from 'enzyme';

it('Renter 404 component', () => {
    const wrapper = shallow(<FourOFour />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<FourOFour />);
    expect(wrapper).toMatchSnapshot();
});
