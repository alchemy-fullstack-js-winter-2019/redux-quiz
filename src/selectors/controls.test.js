import { getTitle, getSubTitle } from './controls';

describe('selectors', () => {
  it('selects a title', () => {
    const state = {
      title: 'This is a TITLE',
      subtitle: ''
    };

    const selectedTitle = getTitle(state);
    expect(selectedTitle).toEqual('This is a TITLE');
  });

  it('selects a subtitle', () => {
    const state = {
      title: '',
      subtitle: 'This is a SUBTITLE'
    };

    const selectedSubtitle = getSubTitle(state);
    expect(selectedSubtitle).toEqual('This is a SUBTITLE');
  });
});
