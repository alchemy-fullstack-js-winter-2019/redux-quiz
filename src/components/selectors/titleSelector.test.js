import { getTitle, getSubTitle } from './titleSelector';

describe('selector test', () => {
  it('can test a title selector', () => {
    const state = {
      title: {
        title: 'title3'
      },
      subtitle: {
        subtitle: 'title3'
      } 
    };
    const selectedTitle = getTitle(state);
    const selectedSubtitle = getSubTitle(state);
    expect(selectedTitle).toEqual({ title: 'title3' });
    expect(selectedSubtitle).toEqual({ subtitle: 'title3' });
  });
});
