import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls', () => {
  it('renders controls', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Controls
        title={'hey'}
        subtitle={'sup'}
        onChange={onChange}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
