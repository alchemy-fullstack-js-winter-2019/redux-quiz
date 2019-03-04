import { getTitle } from './titleSelector';

describe('selector test', () => {
  it('can test a title selector', () => {
    const state = {
      title: {
        title: 'title3'
      } 
    };
    const selectedMarkdown = getTitle(state);
    expect(selectedMarkdown).toEqual('title3');
  });
});
