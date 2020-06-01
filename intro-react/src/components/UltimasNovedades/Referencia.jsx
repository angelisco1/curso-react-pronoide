import React, { Component } from 'react'

export default class Referencia extends Component {
  constructor(props) {
    super()
    this.state = {

    }
    this.refAudio = React.createRef(new Audio());
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    console.dir(this.refAudio.current)
    this.refAudio.current.play();
  }

  handlePause() {
    console.dir(this.refAudio.current)
    this.refAudio.current.pause();
  }

  render() {
    return (
      <div>
        <audio src="/assets/sonido-piolin.mp3" ref={this.refAudio}></audio>
        <button type="button" onClick={this.handlePlay}>Play</button>
        <button type="button" onClick={this.handlePause}>Pause</button>
        <button type="button" onClick={() => this.refAudio.current.pause()}>Pause</button>
      </div>
    )
  }
}
