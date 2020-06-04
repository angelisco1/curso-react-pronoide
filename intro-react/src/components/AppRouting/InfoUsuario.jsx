import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

class InfoUsuario extends Component {
  render() {
    console.log('INFO', this.props)
    const queryParams = queryString.parse(this.props.location.search);
    return (
      <div>
        <h4>Información del usuario {queryParams.ocultarId === 'true' ? '**' : this.props.match.params.usuarioId}</h4>
        <p>Nombre: {this.props.location.state}</p>
      </div>
    )
  }
}

export default withRouter(InfoUsuario)