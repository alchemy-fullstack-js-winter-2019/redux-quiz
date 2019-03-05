import {
  UPDATE_TITLE,
  updateTitle,
  UPDATE_SUBTITLE,
  updateSubtitle
} from './inputs';

describe('input update actions', () => {
  it('can create an update title input action', () => {
    const action = updateTitle('A title');
    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'A title'
    });
  });

  it('can create an update subtitle input action', () => {
    const action = updateSubtitle('This is a subtitle');
    expect(action).toEqual({
      type: UPDATE_SUBTITLE,
      payload: 'This is a subtitle'
    });
  });
});
