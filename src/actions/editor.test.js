import {
  updateTitle,
  updateSubTitle
} from './editor';

describe('actions', () => {
  it('actions title', () => {
    expect(updateTitle('yo')).toEqual({
      type: 'UPDATE_TITLE',
      payload: 'yo'
    });
  });

  it('actions subtitle', () => {
    expect(updateSubTitle('sup')).toEqual({
      type: 'UPDATE_SUBTITLE',
      payload: 'sup'
    });
  });
});
