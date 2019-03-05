import React from 'react';
import renderer from 'react-test-renderer';
import Controls  from './Controls';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Controls />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
