import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';


describe('Controls Test ', () => {
  it('matches a snapshot', () => {
    const title = 'myTitle';
    const subtitle = 'mySubtitle';
    const onChange = jest.fn();
    const tree = renderer.create(
      <Controls title={title} subtitle={subtitle} onChange={onChange}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
