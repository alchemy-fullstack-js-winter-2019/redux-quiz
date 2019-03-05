import reducer from './index';

describe('reducer', () => {
  it('shows a list of markdown', () => {
    const state = {
      title: 'title',
      subtitle: 'text'
    };
    const updatedState = reducer(state, {});

    expect(updatedState).toEqual({
      title: 'title',
      subtitle: 'text'
    });
  });
});
