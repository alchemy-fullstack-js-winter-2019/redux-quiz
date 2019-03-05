import { getTitle, getSubtitle } from './inputs';

describe ('inputs selectors', () => {
  it('can get a title', () => {
    const retrievedState = getTitle({ title: 'A title' });
    expect(retrievedState).toEqual('A title');
  });

  it('can get a subtitle', () => {
    const retrievedState = getSubtitle({ subtitle: 'A subtitle' });
    expect(retrievedState).toEqual('A subtitle');
  });
});
