import React, { Component } from 'react'

export default class Layout extends Component {

  constructor(props) {
    super()
    this.state = {
      isMobile: false
    }
    this.recalculaMobile = this.recalculaMobile.bind(this)
  }

  recalculaMobile() {
    this.setState({
      isMobile: window.innerWidth < 690
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.recalculaMobile)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.recalculaMobile)
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
