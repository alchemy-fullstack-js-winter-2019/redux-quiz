import reducer from './index';

describe('reducer', () => {
  it('handles the update title action', () => {
    const state = {
      title: '',
      subtitle: ''
    };
    const updatedDisplay = reducer(state, {
      type: 'UPDATE_TITLE',
      payload: 'new title'
    });

    expect(updatedDisplay).toEqual({
      title: 'new title', 
      subtitle: ''
    });
  });

  it('handles the update body action', () => {
    const state = {
      title: '',
      subtitle: ''
    };
    const updatedDisplay = reducer(state, {
      type: 'UPDATE_SUBTITLE',
      payload: 'new subtitle'
    });

    expect(updatedDisplay).toEqual({
      title: '', 
      subtitle: 'new subtitle'
    });
  });
});
