import React, { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case 'ArrowUp':
      return {...state, posY: state.posY - 10}
    case 'ArrowDown':
      return {...state, posY: state.posY + 10}
    case 'ArrowLeft':
      return {...state, posX: state.posX - 10}
    case 'ArrowRight':
      return {...state, posX: state.posX + 10}
    default:
      return state;
  }
}

const Caja = () => {
  const [state, dispatch] = useReducer(reducer, {posX: 0, posY: 0})

  const mueveLaCaja = (e) => {
    e.preventDefault()
    dispatch({type: e.code})
  }

  useEffect(() => {
    window.addEventListener('keyup', mueveLaCaja)
    return () => {
      window.removeEventListener('keyup', mueveLaCaja)
    }
  }, [])

  const styles = {
    width: '70px',
    height: '70px',
    backgroundColor: 'black',
    position: 'absolute',
    top: state.posY + 'px',
    left: state.posX + 'px'
  }

  return (
    <div style={styles}></div>
  )
}

export default Caja
