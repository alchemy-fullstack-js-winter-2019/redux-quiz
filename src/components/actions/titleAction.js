export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_SUBTITLE = 'UPDATE_SUBTITLE';

export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title 
});

export const updateSubtitle = subTitle => ({
  type: UPDATE_SUBTITLE,
  payload: subTitle 
});
