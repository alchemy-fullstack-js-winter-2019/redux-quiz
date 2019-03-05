import { getTopText, getBottomText } from './text';

describe('text selctors', () => {
  it('selects only the top text', () => {
    const state = {
      topText: 'This is top text',
      bottomText: 'This is bottom text'
    };
    const selectedTopText = getTopText(state);

    expect(selectedTopText).toEqual('This is top text');
  });
  it('selects only the bottom text', () => {
    const state = {
      topText: 'This is top text',
      bottomText: 'This is bottom text'
    };
    const selectedBottomText = getBottomText(state);

    expect(selectedBottomText).toEqual('This is bottom text');
  });
});
