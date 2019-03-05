import React from 'react';
import Controls from './Controls';
import renderer from 'react-test-renderer';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Controls />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
