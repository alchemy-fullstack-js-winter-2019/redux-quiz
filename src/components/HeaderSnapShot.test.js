import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const header = {
      title: 'this title',
      subtitle: 'this Subtitle'
    };
    const tree = renderer.create(
      <Header header={header} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
