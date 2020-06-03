import React, { Component } from 'react'
import InfoUsuario from './InfoUsuario'

export default class Inicio extends Component {
  render() {
    // console.log('INICIO', this.props)
    return (
      <div>
        <h3>Inicio</h3>
        <InfoUsuario />
      </div>
    )
  }
}
