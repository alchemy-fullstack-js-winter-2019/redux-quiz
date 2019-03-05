import {
  UPDATE_BOTTOM_TEXT,
  updateBottomText,
  UPDATE_TOP_TEXT,
  updateTopText
} from './text';

describe('text action creators', () => {
  it('can create an update top text action', () => {
    const action = updateTopText('New top text');

    expect(action).toEqual({
      type: UPDATE_TOP_TEXT,
      payload: 'New top text' 
    });
  });
  it('can create an update bottom text action', () => {
    const action = updateBottomText('New bottom text');

    expect(action).toEqual({
      type: UPDATE_BOTTOM_TEXT,
      payload: 'New bottom text' 
    });
  });
});
