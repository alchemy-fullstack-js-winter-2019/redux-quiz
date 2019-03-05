import { getTitle, getSubtitle } from './TitleSubtitleEditor';

describe('getTitle', () => {
  it('gets a title', () => {
    const state = 'title';
    
    const selectedTitle = getTitle(state);
    
    expect(selectedTitle).toEqual('title');
  });

  it('gets a subtitle', () => {
    const state = 'subtitle';

    const selectedSubtitle = getSubtitle(state);

    expect(selectedSubtitle).toEqual('subtitle');
  });
})
;
