import { UPDATE_TITLE, updateTitle } from './titleAction.js';

describe('action test', () => {
  it('creates an update title action', () => {
    const action = updateTitle('title2');

    expect(action).toEqual({ 
      type: UPDATE_TITLE,
      payload: 'title2'
    });
  });
});
