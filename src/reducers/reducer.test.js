import reducer from './index';

describe('reducer tests', () => {
  it('tests our reducer', () => {
    const reducer1 = reducer('hello');

    expect(action1).toEqual({
      type: UPDATE_TITLE,
      payload: 'hello'
    });
  });
});
