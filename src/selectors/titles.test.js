import { getTitle, getSubtitle } from './titles';

describe('titles selector', () => {
  it('can get a title from state', () => {
    const state = {
      title: 'this is my title',
      subtitle: 'this is my subtitle'
    };

    const selectedTitle = getTitle(state);

    expect(selectedTitle).toEqual('this is my title');
  });

  it('can get a title from state', () => {
    const state = {
      title: 'this is my title',
      subtitle: 'this is my subtitle'
    };

    const selectedSubtitle = getSubtitle(state);

    expect(selectedSubtitle).toEqual('this is my subtitle');
  });
});
