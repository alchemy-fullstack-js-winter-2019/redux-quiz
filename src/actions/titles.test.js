import { UPDATE_SUBTITLE, updateSubtitle, UPDATE_TITLE, updateTitle } from './titles';

describe('title actions', () => {
  it('can updateSubtitle', () => {
    const action = updateSubtitle('updated subtitle');

    expect(action).toEqual({
      type: UPDATE_SUBTITLE,
      payload: 'updated subtitle'
    });
  });
  
  it('can updateTitle', () => {
    const action = updateTitle('updatedTitle');

    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'updatedTitle'
    });
  });
});
