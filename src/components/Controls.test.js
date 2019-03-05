import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const controls = {
      title: 'title',
      subtitle: 'sub',
      onChange: 'onChange'
    };
    const tree = renderer.create(
      <Controls results={controls} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
