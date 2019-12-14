import React from 'react';
import { shallow } from 'enzyme';
import TermsAndConditions from './TermsAndConditions';

it('Renter HouseOfFame component', () => {
    const wrapper = shallow(<TermsAndConditions />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<TermsAndConditions />);
    expect(wrapper).toMatchSnapshot();
});
