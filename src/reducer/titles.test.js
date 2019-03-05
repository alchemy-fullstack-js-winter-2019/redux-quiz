import reducer from './titles';
import { UPDATE_TITLE, UPDATE_SUBTITLE } from '../actions/titles';

describe('titles reducer', () => {
  it('can handle the update Title action', () => {
    const state = {
      title: '',
      subtitle: ''
    };

    const updatedTitle = reducer(state, {
      type: UPDATE_TITLE,
      payload: 'updated Title'
    });

    expect(updatedTitle).toEqual({
      title: 'updated Title',
      subtitle: ''
    });
  });

  it('can handle the update subtitle action', () => {
    const state = {
      title: '',
      subtitle: ''
    };

    const updatedTitle = reducer(state, {
      type: UPDATE_SUBTITLE,
      payload: 'updated subtitle'
    });

    expect(updatedTitle).toEqual({
      title: '',
      subtitle: 'updated subtitle'
    });
  });
});
