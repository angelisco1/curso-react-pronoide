import { createStore, combineReducers, applyMiddleware } from 'redux'
import memesReducer from './memes'
import thunk from 'redux-thunk'

function configStore() {
  const appReducer = combineReducers({
    memesReducer
  })
  const store = createStore(appReducer, applyMiddleware(thunk))
  return store;
}

export default configStore;