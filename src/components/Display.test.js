import React from 'react';
import Display from './Display';
import renderer from 'react-test-renderer';

describe('Display', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Display />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
