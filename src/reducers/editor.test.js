import reducer from './editor';

describe('reducer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      title: 'yo',
      subtitle: 'sup'
    };
  });

  it('handles update title', () => {
    const updateTitle = reducer(state, {
      type: 'UPDATE_TITLE',
      payload: 'yo2'
    });

    expect(updateTitle).toEqual({
      ...state,
      title: 'yo2'
    });
  });

  it('handles update subtitle', () => {
    const updateTitle = reducer(state, {
      type: 'UPDATE_SUBTITLE',
      payload: 'sup2'
    });

    expect(updateTitle).toEqual({
      ...state,
      title: 'sup2'
    });
  });

});
