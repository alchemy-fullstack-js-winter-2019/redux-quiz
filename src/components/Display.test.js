import React from 'react';
import renderer from 'react-test-renderer';
import Display  from './Display';

describe('Display', () => {
  it('matches a snapshot', () => {
    const title = 'hi';
    const subtitle = 'hey';
    const tree = renderer.create(
      <Display title={title} subtitle={subtitle}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
