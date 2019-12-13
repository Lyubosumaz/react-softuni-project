import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import HouseOfFame from './HouseOfFame';
import { shallow } from 'enzyme';



describe('HouseOfFame component', () => {
    test('should render null if', () => {
        const component = renderer.create(
            <HouseOfFame />
        )
        expect(component.toJSON().toMatchSnapshot())
    })
})