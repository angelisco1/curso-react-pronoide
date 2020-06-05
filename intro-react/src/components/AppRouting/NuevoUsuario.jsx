import React, { Component } from 'react'
import { Redirect, Prompt } from 'react-router-dom';

export default class NuevoUsuario extends Component {
  constructor(props) {
    super()
    this.state = {
      guardando: false,
      datosGuardados: false
    }
    this.guardar = this.guardar.bind(this);
  }

  guardar() {
    this.setState({
      guardando: true
    })
    setTimeout(() => {
      // this.props.history.push('/');
      this.setState({
        guardando: false,
        datosGuardados: true
      })
    }, 1500)
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Nuevo usuario</h3>
        {/* {this.state.datosGuardados ? <Redirect to="/usuarios" /> : null} */}
        {this.state.guardando ? <p>Guardando...</p> : null}
        <button type="button" onClick={this.guardar}>Guardar</button>
        <Prompt message="Seguro que quieres salir? Perderas los cambios..." when={!this.state.datosGuardados} />
      </div>
    )
  }
}
