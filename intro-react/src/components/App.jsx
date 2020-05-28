import React from 'react';
import CmpFuncional from './CmpFuncional'
import PropiedadesYEstado from './PropiedadesYEstado/PropiedadesYEstado';
import ListaDeComponentes from './ListaDeComponentes/ListaDeComponentes';
import CicloDeVida from './CicloDeVida/CicloDeVida';

class App extends React.Component {
  // constructor() {

  // }

  render() {
    return (
      <div>
        {/* <h1>Hola mundo!!!</h1>
        <CmpFuncional /> */}
        {/* <PropiedadesYEstado /> */}
        {/* <ListaDeComponentes /> */}
        <CicloDeVida />
      </div>
    )
  }
}

export default App;