import React from 'react';
import { shallow } from 'enzyme';
import FirstExample from './FirstExample';

describe('Given a FirstExample component', () => {
  it('should render properly', () => {
    let wrapper = shallow(<FirstExample />);

    expect(wrapper).toBeTruthy();
  });

});
