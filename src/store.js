import { createStore } from 'redux';
import index from './reducers';

export default createStore(
  index,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

