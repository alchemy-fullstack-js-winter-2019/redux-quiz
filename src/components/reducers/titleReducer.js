import { 
  UPDATE_TITLE,
  UPDATE_SUBTITLE
} from '../actions/titleAction';

const initialState = {
  title: '',
  subtitle: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SUBTITLE:
      return {
        subtitle: action.payload
      };
  }
  switch(action.type) {
    case UPDATE_TITLE:
      return {
        title: action.payload
      }; 
    default: 
      return state;
  }
}
