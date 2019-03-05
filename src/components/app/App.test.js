import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { Provider } from 'react-redux';
import store from '../../store';

describe('App snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
