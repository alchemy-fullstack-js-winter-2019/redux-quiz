import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('App', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Display title={'a title'}
        subtitle={'a subtitle'}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
