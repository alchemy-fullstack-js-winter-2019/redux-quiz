import reducer from './inputs';
import {
  UPDATE_TITLE,
  UPDATE_SUBTITLE
} from '../actions/inputs';

describe('inputs reducer', () => {
  it('handles the update title action', () => {
    const state = {
      title: '',
      subtitle: ''
    };
    const updatedState = reducer(state, {
      type: UPDATE_TITLE,
      payload: 'this is a title'
    });
    expect(updatedState).toEqual({
      title: 'this is a title',
      subtitle: ''
    });
  });

  it('handles the update subtitle action', () => {
    const state = {
      title: '',
      subtitle: ''
    };
    const updatedState = reducer(state, {
      type: UPDATE_SUBTITLE,
      payload: 'this is a subtitle'
    });
    expect(updatedState).toEqual({
      title: '',
      subtitle: 'this is a subtitle'
    });
  });
});
