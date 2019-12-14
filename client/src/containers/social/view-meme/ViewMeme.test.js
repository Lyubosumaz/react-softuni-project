import React from 'react';
import { shallow } from 'enzyme';
import ViewMeme from './ViewMeme';

it('should renter HouseOfFame Component', () => {
    const wrapper = shallow(<ViewMeme match={{ params: { id: 'test' } }} />);
    expect(wrapper).toBeTruthy();
});

it('should checks for html changes', () => {
    const wrapper = shallow(<ViewMeme match={{ params: { id: 'test' } }} />);
    expect(wrapper).toMatchSnapshot();
});
