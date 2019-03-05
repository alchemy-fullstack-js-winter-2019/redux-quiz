import { getTitle, getSubtitle } from './selector';

describe('selector test', () => {
  it('selector', () => {
    const state = {
      title: 'i hate this test'
    };
    const updatedTitle = getTitle(state);
    expect(updatedTitle).toMatchSnapshot();
  });
});