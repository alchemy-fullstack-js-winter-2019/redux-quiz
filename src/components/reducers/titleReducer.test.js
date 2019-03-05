import reducer from './titleReducer';
import { updateSubtitle } from '../actions/titleAction';

describe('reducer test', () => {
  it('can update a title', () => {
    const state = {
      title: '',
      subtitle: ''
    };

    const updatedState = reducer(state, {
      type: 'UPDATE_TITLE',
      payload: 'title1'
    });
    const updatedSubtitle = reducer(state, {
      type: 'UPDATE_SUBTITLE',
      payload: 'title1'
    });
    expect(updatedState).toEqual({ title: 'title1' });
    expect(updatedSubtitle).toEqual({ subtitle: 'title1' });
  });
});
