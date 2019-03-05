import {
  updateTitle,
  UPDATE_TITLE,
  updateSubTitle,
  UPDATE_SUBTITLE
} from './controls';

describe('action creators', () => {
  it('can update a title', () => {
    const action = updateTitle('G.O.A.T.');

    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'G.O.A.T.' 
    });
  });

  it('can update a subtitle', () => {
    const action = updateSubTitle('What does G.O.A.T. mean?');

    expect(action).toEqual({
      type: UPDATE_SUBTITLE,
      payload: 'What does G.O.A.T. mean?' 
    });
  });
});
