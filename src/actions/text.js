export const UPDATE_TOP_TEXT = 'UPDATE_TOP_TEXT';
export const updateTopText = text => ({
  type: UPDATE_TOP_TEXT,
  payload: text
});

export const UPDATE_BOTTOM_TEXT = 'UPDATE_BOTTOM_TEXT';
export const updateBottomText = text => ({
  type: UPDATE_BOTTOM_TEXT,
  payload: text
});
