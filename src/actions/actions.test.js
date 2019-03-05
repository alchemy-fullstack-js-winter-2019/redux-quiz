import {
  updateTitle,
  UPDATE_TITLE,
  updateSubTitle,
  UPDATE_SUBTITLE
} from './index';

describe('ACTIONS TEST', () => {
  it('updateTitle', () => {
    const action1 = updateTitle('hello');

    expect(action1).toEqual({
      type: UPDATE_TITLE,
      payload: 'hello'
    });
  });
  it('updateSubTitle', () => {
    const action2 = updateSubTitle('hello');

    expect(action2).toEqual({
      type: UPDATE_SUBTITLE,
      payload: 'hello'
    });
  });
});
