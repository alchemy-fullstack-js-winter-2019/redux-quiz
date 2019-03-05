import {
  updateTitle,
  UPDATE_TITLE
} from './header';

describe('header action creators', () => {
  it('can update the title', () => {
    const action = updateTitle('new title');

    expect(action).toEqual({
      type:UPDATE_TITLE,
      payload: { title: 'new title' }
    });
  });
});

