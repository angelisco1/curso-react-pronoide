import { createStore } from 'redux'

const ActionIncrementar = {
  type: 'INCREMENTAR'
}

const ActionDecrementar = {
  type: 'DECREMENTAR'
}

const initialState = 0;

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'DECREMENTAR':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log('Cuenta cambiada: ', store.getState())
})

console.log('Cuenta: ', store.getState())
store.dispatch(ActionIncrementar)
store.dispatch(ActionIncrementar)
console.log('Cuenta: ', store.getState())