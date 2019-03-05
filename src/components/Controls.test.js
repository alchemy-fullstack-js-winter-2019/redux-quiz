import React from 'react';
import Controls from './Controls';
import renderer from 'react-test-renderer';

describe('Controls', () => {
  it('renders controls', () => {
    const onChange = jest.fn();
    const tree = renderer.create(
      <Controls
        title={'hey'}
        subtitle={'sup'}
        onChange={onChange}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
