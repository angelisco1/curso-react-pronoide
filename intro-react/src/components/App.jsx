import React from 'react';
import CmpFuncional from './CmpFuncional'
import PropiedadesYEstado from './PropiedadesYEstado/PropiedadesYEstado';
import ListaDeComponentes from './ListaDeComponentes/ListaDeComponentes';

class App extends React.Component {
  // constructor() {

  // }


  render() {
    return (
      <div>
        {/* <h1>Hola mundo!!!</h1>
        <CmpFuncional /> */}
        {/* <PropiedadesYEstado /> */}
        <ListaDeComponentes />

      </div>
    )
  }
}

export default App;