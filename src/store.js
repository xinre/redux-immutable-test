import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import rootReducer from './reducer';

const rootReducers = combineReducers({
  rootReducer,
});

const store = createStore(
    rootReducers,
    Immutable.Map({}),
    applyMiddleware(
      thunkMiddleware,
    )
  );

export default store;