import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore( //create store takes a reducer that will take action everytime actions come in
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //this second action setsup dev tools
);

export default store;
