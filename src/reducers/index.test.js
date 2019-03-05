import reducer from './index';
import { updateTitle } from '../actions/header';

describe('header reducer', () => {
  it('can update the title', () => {
    const state = {
      title: 'old title',
      subtitle: 'old subtitle'
    };

    const updateTitleAction = updateTitle('new title', 'old title');
    const updatedState = reducer(state, updateTitleAction);
    expect(updatedState).toEqual({
      title: 'new title',
      subtitle: 'old title'
    });
    expect(updatedState.title).toHaveLength(1);
  });
});
