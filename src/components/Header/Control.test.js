import React from 'react';
import renderer from 'react-test-renderer';
import { Controls } from '../Header/Controls';

describe('Controls test', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Controls title="Title Test" subtitle="Subtitle Test" onChange={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
