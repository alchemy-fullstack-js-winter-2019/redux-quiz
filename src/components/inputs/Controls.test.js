import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('App', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Controls title={'a title'}
        subtitle={'a subtitle'}
        handleChange={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
