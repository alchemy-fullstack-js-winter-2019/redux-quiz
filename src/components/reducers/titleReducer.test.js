import reducer from './titleReducer';

describe('reducer test', () => {
  it('can update a title', () => {
    const state = {
      title: ''
    };

    const updatedState = reducer(state, {
      type: 'UPDATE_TITLE',
      payload: 'title1'
    });
    expect(updatedState).toEqual({ title: 'title1' });
  });
});
