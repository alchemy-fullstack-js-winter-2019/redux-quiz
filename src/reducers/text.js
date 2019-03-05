import { UPDATE_TEXT } from '../actions/text';

const initialState = {
  text: {
    topText: 'This is top text',
    bottomText: 'This is bottom text'
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_TEXT:
      return { 
        ...state,
        text: action.payload
      };
  }
  return state;
}
