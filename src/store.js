import { createStore } from 'redux';
import inputs from './reducers/inputs';

export default createStore(
  inputs,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
