import React, { Component } from 'react'
import Color from './Color'

export default class CicloDeVida extends Component {
  constructor(props) {
    super();
    this.state = {
      cuenta: -1,
      mostrarColor: true
    }
  }

  render() {
    const {cuenta} = this.state;
    // const cmp = this.state.mostrarColor ? <Color cuenta={cuenta} /> : null
    return (
      <div>
        <button
          type="button"
          onClick={() => this.setState({cuenta: cuenta - 1})}
        >-</button>
        <span>Cuenta: {cuenta}</span>
        <button
          type="button"
          onClick={() => this.setState({cuenta: cuenta + 1})}
        >+</button>
        <button type="button">Toggle Color</button>
        {this.state.mostrarColor ? <Color cuenta={cuenta} /> : null}
      </div>
    )
  }
}
