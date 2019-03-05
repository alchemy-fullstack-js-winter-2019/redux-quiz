import {
  getTitle,
  getSubTitle
} from './editor';

describe('selector', () => {
  let state = {
    title: 'yo',
    subtitle: 'sup'
  };

  it('gets title', () => {
    expect(getTitle(state)).toEqual('yo');
  });

  it('gets subtitle', () => {
    expect(getSubTitle(state)).toEqual('sup');
  });
});
