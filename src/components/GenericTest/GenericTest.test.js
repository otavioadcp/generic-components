import React from 'react';
import { shallow } from 'enzyme';
import GenericTest from './GenericTest';

describe('Given a GenericTest component', () => {
  it('should render properly', () => {
    let wrapper = shallow(<GenericTest />);

    expect(wrapper).toBeTruthy();
  });

});
