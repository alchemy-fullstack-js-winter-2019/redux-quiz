import { getSubtitle, getTitle } from './header';

describe('header selectors', () => {
  it('gets a title from state', () => {
    const state = {
      title: 'NewTitle'
    };

    const newTitle = getTitle(state);
    expect(newTitle).toEqual('NewTitle');

  });

  it('gets a subtitle from state', () => {
    const state = {
      subtitle: 'NewSubtitle'
    };

    const newSubtitle = getSubtitle(state);
    expect(newSubtitle).toEqual('NewSubtitle');
  });
});
