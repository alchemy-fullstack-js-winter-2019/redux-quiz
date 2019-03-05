import { UPDATE_TITLE, UPDATE_SUBTITLE } from '../actions/Action';

const initialState = {
  title: 'Title',
  subtitle: 'Subtitle'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_TITLE:
      return { ...state, title: payload };
    case UPDATE_SUBTITLE:
      return { ...state, subtitle: payload };
    default:
      return state;
  }
}
