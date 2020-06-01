import React, { Component } from 'react'

export default class Layout extends Component {

  constructor(props) {
    super()
    this.state = {
      isMobile: false
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 690
      })
    })
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexDirection: this.state.isMobile ? 'column' : 'row'
      }
    }

    return (
      <div style={styles.root}>
        <div>
          {this.props.children[0]}
        </div>
        <div>
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}
