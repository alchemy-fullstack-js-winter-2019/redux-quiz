import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('Display', () => {
  it('matches a snapshot', () => {
    const display = {
      title: 'title',
      subtitle: 'sub',
    };
    const tree = renderer.create(
      <Display results={display} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
