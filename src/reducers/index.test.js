import React from 'react';
import renderer from 'react-test-renderer';
import index from '../reducers/index';
import { updateTitle } from '../actions/header';

describe('reducers', () => {
  it('test title reducer', () => {
    const initalState = {};
    const action = {
      type: 'UPDATE_TITLE',
      payload: {
        title: 'test' 
      }
    };
    const newState = reducer(initalState, action);
    expect(newState).toEqual({
      title: 'test',
    });
  });
  it('test subtitle reducer', () => {
    const intialState = {};
    const action = {
      type: 'UPDATE_SUBTITLE',
      payload: {
        subtitle: 'subtitle test'
      }
    };
    const newState = reducer(initalState, action);
    expect(newState).toEqual({
      subtitle: 'subtitle test'
    });
  });
});
