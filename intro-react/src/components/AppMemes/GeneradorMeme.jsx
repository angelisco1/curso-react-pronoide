import React, { Component } from 'react'
import Meme from './Meme'
import Form from './Form'

export default class GeneradorMeme extends Component {
  constructor(props) {
    super()
    this.state = {
      texto1: 'Texto Arriba',
      img: 'https://i.imgflip.com/1bij.jpg',
      texto2: 'Texto Abajo',
      color: '#000000'
    }

    this.handleChange = this.handleChange.bind(this)
    this.resetMeme = this.resetMeme.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  resetMeme() {
    this.setState({
      texto1: 'Texto Arriba',
      img: 'https://i.imgflip.com/1bij.jpg',
      texto2: 'Texto Abajo',
      color: '#000000'
    })
  }

  render() {
    return (
      <div>
        <Meme {...this.state} />
        <Form
          {...this.state}
          onHandleChange={this.handleChange}
          onResetState={this.resetMeme}
        />
      </div>
    )
  }
}
