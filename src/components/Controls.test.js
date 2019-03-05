import React from 'react';
import renderer from 'react-test-renderer';
import Controls  from './Controls';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const title = 'sup';
    const subtitle = 'how you doin';
    const onChange = jest.fn();

    const tree = renderer.create(
      <Controls title={title} subtitle={subtitle} onChange={onChange} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
