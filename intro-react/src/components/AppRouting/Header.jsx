import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>Routing en React</h2>
      <hr/>
      <ul>
        <li>
          <NavLink to="/" exact>Inicio</NavLink>
          {/* <Link to="/">Inicio</Link> */}
        </li>
        <li>
          <NavLink to="/usuarios">Usuarios</NavLink>
        </li>
        <li>
          <NavLink to="/nuevo-usuario">Nuevo usuario</NavLink>
          {/* <Link to="/nuevo-usuario">Nuevo usuario</Link> */}
          {/* <a href="" onClick={(e) => {
            e.preventDefault()
            window.history.pushState(props.to)
          }}></a> */}
        </li>
        <li>
          <NavLink to="/no-existe">Error</NavLink>
        </li>
      </ul>
      <hr/>
    </div>
  )
}

export default Header
