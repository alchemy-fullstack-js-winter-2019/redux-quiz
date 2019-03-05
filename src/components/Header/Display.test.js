import React from 'react';
import renderer from 'react-test-renderer';
import { Display } from '../Header/Display';

describe('Display test', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Display title="Title Test" subtitle="Subtitle Test" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
