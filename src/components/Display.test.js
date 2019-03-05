import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('display snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <Display
        title='hello'
        subtitle='goodbye'
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
