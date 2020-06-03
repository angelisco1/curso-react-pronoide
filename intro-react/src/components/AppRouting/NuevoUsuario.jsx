import React, { Component } from 'react'

export default class NuevoUsuario extends Component {
  constructor(props) {
    super()
    this.state = {
      guardando: false
    }
    this.guardar = this.guardar.bind(this);
  }

  guardar() {
    this.setState({
      guardando: true
    })
    setTimeout(() => {
      this.props.history.push('/');
    }, 1500)
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Nuevo usuario</h3>
        {this.state.guardando ? <p>Guardando...</p> : null}
        <button type="button" onClick={this.guardar}>Guardar</button>
      </div>
    )
  }
}
