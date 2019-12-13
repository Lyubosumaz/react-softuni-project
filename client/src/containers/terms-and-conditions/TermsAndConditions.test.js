import React from 'react';
import TermsAndConditions from './TermsAndConditions';
import { shallow } from 'enzyme';

it('Renter HouseOfFame component', () => {
    const wrapper = shallow(<TermsAndConditions />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<TermsAndConditions />);
    expect(wrapper).toMatchSnapshot();
});
