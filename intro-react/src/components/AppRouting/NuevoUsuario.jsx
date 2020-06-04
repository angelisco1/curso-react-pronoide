import React, { Component } from 'react'
import { Redirect } from 'react-router';

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
        datosGuardados: true
      })
    }, 1500)
  }

  componentWillUnmount() {

  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Nuevo usuario</h3>
        {this.state.datosGuardados ? <Redirect to="/usuarios" /> : null}
        {this.state.guardando ? <p>Guardando...</p> : null}
        <button type="button" onClick={this.guardar}>Guardar</button>
      </div>
    )
  }
}
