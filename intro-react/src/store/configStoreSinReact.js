import { createStore, combineReducers } from 'redux'

const ActionIncrementar = {
  type: 'INCREMENTAR'
}

const ActionDecrementar = {
  type: 'DECREMENTAR'
}

const initialState = {cuenta: 0, txt: 'Hola mundo!'};

function reducer(state = {cuenta: 0}, action) {
  switch(action.type) {
    case 'INCREMENTAR':
      return {cuenta: state.cuenta + 1};
    case 'DECREMENTAR':
      return {cuenta: state.cuenta - 1};
    default:
      return state;
  }
}

function reducer2(state = {txt: 'Hola mundo!'}, action) {
  switch(action.type) {
    case 'INCREMENTAR':
      return {txt: state.txt + '!'}
    case 'REVERSE':
      return {txt: state.txt.split('').reverse().join('')}
    default:
      return state;
  }
}

const appReducer = combineReducers({reducer, reducer2})

const store = createStore(appReducer)

store.subscribe(() => {
  console.log('Cuenta cambiada: ', store.getState())
})

console.log('Cuenta: ', store.getState())
store.dispatch(ActionIncrementar)
store.dispatch(ActionIncrementar)
store.dispatch({type: 'REVERSE'})
store.dispatch({type: 'NO_EXISTE'})
console.log('Cuenta: ', store.getState())