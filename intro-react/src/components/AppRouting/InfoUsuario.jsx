import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class InfoUsuario extends Component {
  render() {
    // console.log('INFO', this.props)
    return (
      <div>
        <h4>Información del usuario ID</h4>
      </div>
    )
  }
}

export default withRouter(InfoUsuario)