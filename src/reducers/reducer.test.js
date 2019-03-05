import reducer from './reducer';;

describe('reducer test', () => {
  it('reduer test', () => {
    const state = {
      title: '',
      subtitle: ''
    };

    const updatedState = reducer(state, {
      type: 'UPDATE_TITLE',
      payload: 'title1'
    });
    expect(updatedState).toMatchSnapshot();
  });
});