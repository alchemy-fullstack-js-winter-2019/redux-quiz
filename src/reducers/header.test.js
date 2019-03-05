import reducer from './header';

describe('header reducer', () => {
  it('updates a title to state', () => {
    const state = {
      title: 'oldTitle'
    };

    const updatedState = reducer(state, {
      type: 'UPDATE_TITLE',
      payload: 'newTitle'
    });

    expect(updatedState).toEqual({
      title: 'newTitle'
    });
  });

  it('updates a subtitle to state', () => {
    const state = {
      subtitle: 'oldSubtitle'
    };

    const updatedState = reducer(state, {
      type: 'UPDATE_SUBTITLE',
      payload: 'newSubtitle'
    });

    expect(updatedState).toEqual({
      subtitle: 'newSubtitle'
    });
  });
});
