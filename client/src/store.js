import { createStore , applyMiddleware , compose } from 'redux';
import thunk from 'react-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;