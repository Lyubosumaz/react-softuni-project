import React from 'react';
import { shallow } from 'enzyme';
import ViewMeme from './ViewMeme';

it('Renter HouseOfFame component', () => {
    const wrapper = shallow(<ViewMeme match={{ params: { id: 'test' } }} />);
    expect(wrapper).toBeTruthy();
});

it('Checks for html changes', () => {
    const wrapper = shallow(<ViewMeme match={{ params: { id: 'test' } }} />);
    expect(wrapper).toMatchSnapshot();
});
