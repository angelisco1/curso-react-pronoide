import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import NuevoUsuario from './NuevoUsuario';
import Inicio from './Inicio';
import Header from './Header';
import Usuarios from './Usuarios';
import Error404 from './Error404';

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      isAdmin: false
    }
  }


  render() {
    return (
      <div>
        <Header />
        <button type="button" onClick={
          () => this.setState({isAdmin: !this.state.isAdmin})
        }>Toggle isAdmin</button>
        <Switch>
          <Route path="/inicio" exact component={Inicio} />
          {this.state.isAdmin ? <Route path="/nuevo-usuario" component={NuevoUsuario} /> : null}
          <Route path="/usuarios" component={Usuarios} />
          {/* <Route path="/:id" render={() => (
            <p>Cuidado con esta ruta</p>
          )} /> */}
          <Redirect from="/" exact to="/inicio" />
          <Route path="**" component={Error404} />
        </Switch>
      </div>
    )
  }
}
