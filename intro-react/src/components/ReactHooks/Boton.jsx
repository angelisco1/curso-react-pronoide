import React, { useContext } from 'react'
import { darkModeCtx } from './ReactHooks'

const Boton = ({onClick, children}) => {

  const darkMode = useContext(darkModeCtx)

  const styles = {
    border: '1px solid black',
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
    width: '150px',
    height: '40px',
    margin: '15px'
  }

  return (
    <button type="button" onClick={onClick} style={styles}>{children}</button>
  )
}

export default Boton
