import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';


describe('Display Test', () => {
  it('matches a snapshot', () => {
    const title = 'myTitle';
    const subtitle = 'mySubtitle';
    const tree = renderer.create(
      <Display title={title} subtitle={subtitle}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
