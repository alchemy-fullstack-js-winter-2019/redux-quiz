import React from 'react';
import Display from './Display';
import renderer from 'react-test-renderer';

describe('Display', () => {
  it('renders controls', () => {
    const tree = renderer.create(
      <Display
        title={'hey'}
        subtitle={'sup'}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
