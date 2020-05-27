import React, { Component } from 'react'
import Sugus from './Sugus'

export default class ListaDeComponentes extends Component {
  constructor(props) {
    super();
    this.state = {
      sugus: [
        {
          id: 0,
          color: 'blue',
          sabor: 'piña'
        },
        {
          id: 1,
          color: 'orange',
          sabor: 'naranja'
        },
        {
          id: 2,
          color: 'yellow',
          sabor: 'limón'
        },
      ]
    }
  }

  render() {
    const listaSugus = this.state.sugus.map((s, pos) => {
      return <Sugus key={s.id} {...s} />
    })

    return (
      <div>
        {listaSugus}
      </div>
    )
  }
}
