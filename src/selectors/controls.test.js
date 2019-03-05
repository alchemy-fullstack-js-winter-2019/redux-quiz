import { getTitle, getSubtitle } from './controls';

describe('controls title selector', () => {
  it('selects title', () => {
    const state = {
      title: 'fluffy'
    };

    expect(getTitle(state)).toEqual('fluffy');
  });
  it('selects subtitle', () => {
    const state = {
      subtitle: 'alive'
    };

    expect(getSubtitle(state)).toEqual('alive');
  });
});
