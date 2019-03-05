import React from 'react';
import renderer from 'react-test-renderer';
import Control from './Control';

describe('Character', () => {
  it('matches a snapshot', () => {
    const title = 'title';

    const subtitle = 'subtitle';

    const tree = renderer.create(
      <Control title={title} subtitle={subtitle}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
