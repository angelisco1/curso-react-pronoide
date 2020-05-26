import React from 'react';
import CmpFuncional from './CmpFuncional'
import PropiedadesYEstado from './PropiedadesYEstado/PropiedadesYEstado';

class App extends React.Component {
  // constructor() {

  // }


  render() {
    return (
      <div>
        <h1>Hola mundo!!!</h1>
        <CmpFuncional />

        <PropiedadesYEstado />

      </div>
    )
  }
}

export default App;