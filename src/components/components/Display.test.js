import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('Character', () => {
  it('matches a snapshot', () => {
    const title = 'title';

    const subtitle = 'subtitle';

    const tree = renderer.create(
      <Display title={title} subtitle={subtitle}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
