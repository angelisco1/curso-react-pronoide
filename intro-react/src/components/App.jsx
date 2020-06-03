import React from 'react';
import CmpFuncional from './CmpFuncional'
import PropiedadesYEstado from './PropiedadesYEstado/PropiedadesYEstado';
import ListaDeComponentes from './ListaDeComponentes/ListaDeComponentes';
import CicloDeVida from './CicloDeVida/CicloDeVida';
import Formulario from './Formulario/Formulario';
import HOC from './HOC/HOC';
import UltimasNovedades from './UltimasNovedades/UltimasNovedades';
import AppMemes from './AppMemes/AppMemes';
import AppRouting from './AppRouting/AppRouting'


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
        {/* <CicloDeVida /> */}
        {/* <Formulario /> */}
        {/* <HOC /> */}
        {/* <UltimasNovedades /> */}
        {/* <AppMemes /> */}
        <AppRouting />
      </div>
    )
  }
}

export default App;