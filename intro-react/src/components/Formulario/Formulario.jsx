import React, { Component } from 'react'

export default class Formulario extends Component {
  constructor(props) {
    super()
    this.state = {
      usuario: '1',
      password: '',
      remember: false,
      errors: {}
    }

    this.handleChangeInput = this.handleChangeInput.bind(this)
    // this.handleChangeInputP = this.handleChangeInputP.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state);
    // Petición
  }

  handleChangeInput(event) {
    let value = event.target.value
    if (['radio', 'checkbox'].includes(event.target.type)) {
      value = event.target.checked
    }

    this.setState({
      [event.target.name]: value
    })
  }

  handleValidate(isRequired, isStark) {
    console.log('Requerido: ', isRequired)

    return (event) => {
      const validStark = isStark && ['arya', 'robb', 'sansa', 'bran', 'tony', 'rickon'].includes(event.target.value);
      const validRequired = isRequired && event.target.value.trim();

      if (!validRequired || !validStark) {
        this.setState({
          usuario: event.target.value.trim(),
          errors: {
            usuario: true
          }
        })
      } else {
        this.setState({
          usuario: event.target.value.trim(),
          errors: {
            usuario: false
          }
        })
      }
    }

  }

  // handleChangeInputP(event) {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="usuario">Usuario:</label>
            {/* <input type="text" id="usuario" name="usuario" value={this.state.usuario} onChange={this.handleChangeInput} /> */}


            <input type="text" id="usuario" name="usuario" value={this.state.usuario}
              onChange={this.handleValidate(true, true)} />
            {this.state.errors.usuario ? <span>Error: el campo es obligatorio y tiene que ser un stark</span> : null}

          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChangeInput} />
          </div>
          <div>
            <label htmlFor="remember">Remember me</label>
            <input type="checkbox" id="remember" name="remember" checked={this.state.remember} onChange={this.handleChangeInput} />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
