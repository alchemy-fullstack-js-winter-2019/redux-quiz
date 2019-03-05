import { getTitle, getSubtitle } from './index';

describe('tests selectors', () => {
  it('selects all titles', () => {
    const selector1 = getTitle('this');
    expect(selector1).toEqual('this');
  });
  it('selects subtitles', () => {
    const selector2 = getSubtitle('this');
    expect(selector2).toEqual('this');
  });
});

