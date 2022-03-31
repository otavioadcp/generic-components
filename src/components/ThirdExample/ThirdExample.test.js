import React from 'react';
import { shallow } from 'enzyme';
import ThirdExample from './ThirdExample';

describe('Given a ThirdExample component', () => {
  it('should render properly', () => {
    let wrapper = shallow(<ThirdExample />);

    expect(wrapper).toBeTruthy();
  });

});
