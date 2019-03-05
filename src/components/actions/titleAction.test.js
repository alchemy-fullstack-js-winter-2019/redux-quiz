import { UPDATE_TITLE, updateTitle, updateSubtitle, UPDATE_SUBTITLE } from './titleAction.js';

describe('action test', () => {
  it('creates an update title action', () => {
    const action = updateTitle('title2');
    const action2 = updateSubtitle('title2');

    expect(action).toEqual({ 
      type: UPDATE_TITLE,
      payload: 'title2'
    });
    expect(action2).toEqual({ 
      type: UPDATE_SUBTITLE,
      payload: 'title2'
    });
  });
});
