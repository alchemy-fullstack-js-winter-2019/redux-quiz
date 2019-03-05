import { UPDATE_TITLE, UPDATE_SUBTITLE } from '../actions/controls';

const initialState = {
  title: 'title',
  subtitle: 'subtitle'
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
