import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>Routing en React</h2>
      <hr/>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/nuevo-usuario">Nuevo usuario</Link>
          {/* <a href="" onClick={(e) => {
            e.preventDefault()
            window.history.pushState(props.to)
          }}></a> */}
        </li>
      </ul>
      <hr/>
    </div>
  )
}

export default Header
