import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import InfoUsuario from './InfoUsuario'

export default class Usuarios extends Component {
  constructor(props) {
    super()
    this.state = {
      usuarios: [
        {id: 1, nombre: 'Charly'},
        {id: 4, nombre: 'Kozinsky'},
        {id: 16, nombre: 'Pepe'},
      ]
    }
  }

  render() {

    const listaUsuarios = this.state.usuarios.map(usuario => {
      return (
        <React.Fragment key={usuario.id}>
          {/* <Link to={`${this.props.match.url}/${usuario.id}/info?ocultarId=false`}>Información del usuario {usuario.id}</Link> */}
          <Link to={{
            pathname: `${this.props.match.url}/${usuario.id}/info`,
            state: usuario.nombre,
            search: '?ocultarId=true'
          }}>Información del usuario {usuario.id}</Link>
          <br/>
        </React.Fragment>
      )
    })

    return (
      <div>
        <h2>Usuarios</h2>
        {listaUsuarios}
        <hr/>
        <Route path={`${this.props.match.url}/:usuarioId/info`} render={InfoUsuario} />
      </div>
    )
  }
}
