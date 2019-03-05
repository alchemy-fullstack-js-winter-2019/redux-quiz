import reducer from './text';
import { updateBottomText, updateTopText } from '../actions/text';

describe('reducer tests', () => {
  it('can update bottom text', () => {
    const state = {
      topText: 'This is top text',
      bottomText: 'This is bottom text'
    };
    const updateBottomTextAction = updateBottomText('New bottom text');
    
    const updatedState = reducer(state, updateBottomTextAction);

    expect(updatedState).toEqual({
      topText: 'This is top text',
      bottomText: 'New bottom text'
    });
  });

  it('can update top text', () => {
    const state = {
      topText: 'This is top text',
      bottomText: 'This is bottom text'
    };
    const updateTopTextAction = updateTopText('New top text');
    
    const updatedState = reducer(state, updateTopTextAction);

    expect(updatedState).toEqual({
      topText: 'New top text',
      bottomText: 'This is bottom text'
    });
  });
});
