import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';

describe('controls snapshot', () => {
  it('can match a snapshot', () => {
    const handleChange = jest.fn();
    const tree = renderer.create(
      <Controls 
        title='hello'
        subtitle='goodbye'
        onChange={handleChange} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
