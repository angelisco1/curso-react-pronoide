import React from 'react'
import traducir from './traducciones'
// import { ctxLang } from './UltimasNovedades'
import withContext from './withContext'

const CtxSeccion2 = ({lang}) => {
  return (
    <div>
      {/* <ctxLang.Consumer>
        {
          (lang) => <h3>{traducir('hola_mundo', lang)}</h3>
        }
      </ctxLang.Consumer> */}
      <h3>{traducir('hola_mundo', lang)}</h3>
    </div>
  )
}

const CtxSeccion2WithLang = withContext(CtxSeccion2)

export default CtxSeccion2WithLang
