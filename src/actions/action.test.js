import { UPDATE_TITLE, updateTitle } from './action';

describe('action test', () => {
  it('updates title', () => {
    const action = updateTitle('Real Title');

    expect(action).toEqual({ 
      type: UPDATE_TITLE,
      payload: 'Real Title'
    });
    expect(action).toMatchSnapshot();
  });
});