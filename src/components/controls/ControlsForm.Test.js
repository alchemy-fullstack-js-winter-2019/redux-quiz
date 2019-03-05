import React from 'react';
import renderer from 'react-test-renderer';
import ControlsForm from './ControlsForm';

describe('ControlsForm', () => {
  it('matches a snapshot', () => {
    const controls = {
      title: 'fluffy',
      subtitle: 'alive'
    };
    const tree = renderer.create(
      <ControlsForm controls={controls} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
