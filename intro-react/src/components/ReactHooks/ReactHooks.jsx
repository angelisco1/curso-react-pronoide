import React, { useState } from 'react'
import HookState from './HookState'
import Autocomplete from './Autocomplete'
import Boton from './Boton'
import InfoPersona from './InfoPersona'
import AudioPlayer from './AudioPlayer'
import Caja from './Caja'
import Form from './Form'

export const darkModeCtx = React.createContext(true);

const ReactHooks = () => {

  const [mostrar, setMostrar] = useState(true)

  return (
    <div>
      <HookState />
      <darkModeCtx.Provider value={mostrar}>
        <Boton onClick={() => setMostrar(!mostrar)}>
          Toggle mostrar ({mostrar.toString()})
        </Boton>
      </darkModeCtx.Provider>
      {mostrar ? <Autocomplete /> : null}
      <InfoPersona />
      <AudioPlayer />
      <Caja />
      <Form />
    </div>
  )
}

export default ReactHooks
