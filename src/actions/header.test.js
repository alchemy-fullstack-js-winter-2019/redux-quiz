import { 
  updateSubtitle, 
  UPDATE_SUBTITLE, 
  updateTitle,
  UPDATE_TITLE
} from './header';

describe('header actions', () => {
  it('creates an action that updates a title', () => {
    const action = updateTitle('someNewTitle');

    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'someNewTitle'
    });
  });

  it('creates an action that updates a subtitle', () => {
    const action = updateSubtitle('someNewSubtitle');

    expect(action).toEqual({
      type: UPDATE_SUBTITLE,
      payload: 'someNewSubtitle'
    });
  });
});
