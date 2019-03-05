import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';

describe('App', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
