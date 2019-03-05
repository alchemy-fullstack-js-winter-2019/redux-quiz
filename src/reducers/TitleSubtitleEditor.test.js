import reducer from './TitleSubtitleEditor';
import { updateTitle, updateSubtitle } from '../actions/TitleSubtitleEditor';

describe('reducer', () => {
  it('can handle updating title', () => {
    const state = 'title1';

    const updatedTitle = updateTitle('newTitle');

    const updateState = reducer(state, updatedTitle);

    expect(updateState).toEqual('newTitle');
  });

  it('can handle updating subTitle', () => {
    const state = 'subTitle1';

    const updatedsubTitle = updateSubtitle('newsubTitle');

    const updateState = reducer(state, updatedsubTitle);

    expect(updateState).toEqual('newsubTitle');
  });
});
