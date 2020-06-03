import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

export default class AppRouting extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    )
  }
}
