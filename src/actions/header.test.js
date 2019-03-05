import React from 'react';
import renderer from 'react-test-renderer';
import header from '../actions/header';

describe('action test', () => {
  it('test title', () => {
    const payload = {
      payload: 'Title'
    };
    const action = updateTitle.requestData(payload);
    expect(action).toEqual({
      payload: payload,
      type: 'UPDATE_TITLE'
    });
  });
  it('test subtitle', () => {
    const payload = {
      payload: 'Subtitle'
    };
    const action = updateSubtitle.requestData(payload);
    expect(action).toEqual({
      payload: payload,
      type: 'UPDATE_SUBTITLE'
    });
  });
});
