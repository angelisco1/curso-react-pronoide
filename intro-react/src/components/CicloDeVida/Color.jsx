import React, { Component } from 'react'

export default class Color extends Component {
  constructor(props) {
    super();
    this.state = {
      color: 'blue'
    }
  }

  componentDidMount() {
    const id = setInterval(() => {
      console.log('Intervalo...')
    }, 1000)
    this.setState({
      interval: id
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      color: nextProps.cuenta < 0 ? 'red' : 'yellowgreen'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.color !== nextState.color
  }

  render() {
    const styles = {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: this.state.color
    }

    console.log('Se ha pintado!')

    return (
      <div style={styles}>

      </div>
    )
  }
}
