import { UPDATE_TOP_TEXT, UPDATE_BOTTOM_TEXT } from '../actions/text';

const initialState = {
  topText: 'This is top text',
  bottomText: 'This is bottom text'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_TOP_TEXT:
      return { 
        ...state,
        topText: action.payload
      };
    case UPDATE_BOTTOM_TEXT:
      return { 
        ...state,
        bottomText: action.payload
      };
  }
  return state;
}
