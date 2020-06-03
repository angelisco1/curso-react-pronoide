import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import NuevoUsuario from './NuevoUsuario';
import Inicio from './Inicio';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Inicio} />
        <Route path="/nuevo-usuario" component={NuevoUsuario} />
      </div>
    )
  }
}
