import React from 'react';
import { shallow } from 'enzyme';
import SecondExample from './SecondExample';

describe('Given a SecondExample component', () => {
  it('should render properly', () => {
    let wrapper = shallow(<SecondExample />);

    expect(wrapper).toBeTruthy();
  });

});
