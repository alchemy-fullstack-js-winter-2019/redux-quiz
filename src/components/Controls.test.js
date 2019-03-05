import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper).toMatchSnapshot();
  });
});
