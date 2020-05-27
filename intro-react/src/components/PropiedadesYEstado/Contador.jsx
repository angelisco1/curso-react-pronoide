import React, { Component } from 'react'


// function muestraAlert() {
//   alert('asdsasd')
// }

export default class Contador extends Component {
  constructor(props) {
    super();

  }

  render() {
    return (
      <div>
        {/* <button type="button" onClick={() => this.setState({cuenta: this.state.cuenta - 1})}>-</button> */}
        {/* <button type="button" onClick={() => this.decrementar()}>-</button> */}
        <button type="button" onClick={this.props.onHandleDecrement}>-</button>
        <span>Cuenta: {this.props.cuenta}</span>
        {/* <button type="button" onClick={ muestraAlert }>+</button> */}
        <button type="button" onClick={this.props.onHandleIncrement}>+</button>
      </div>
    )
  }
}