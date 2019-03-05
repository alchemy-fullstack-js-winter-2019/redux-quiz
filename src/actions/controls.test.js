import { 
  updateTitle, 
  UPDATE_TITLE,
  updateSubtitle,
  UPDATE_SUBTITLE
} from './controls';

describe('update Titles', () => {
  it('updates a markdown action', () => {
    const action = updateTitle('update title text');

    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'update title text'
    });
  });
  it('updates Subtitle', () => {
    const action = updateSubtitle('update subtitle text');

    expect(action).toEqual({
      type: UPDATE_SUBTITLE,
      payload: 'update subtitle text'
    });
  });
});
