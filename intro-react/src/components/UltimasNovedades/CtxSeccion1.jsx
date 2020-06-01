import React from 'react'
import CtxSeccion2 from './CtxSeccion2'

const CtxSeccion1 = () => {
  // const newCtx2 = withContext(CtxSeccion2)

  return (
    <div>
      <h2>Sección 1</h2>
      <hr/>
      <CtxSeccion2 />
    </div>
  )
}

export default CtxSeccion1
