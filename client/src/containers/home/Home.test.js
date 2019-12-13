import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

it('Renter Home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});
