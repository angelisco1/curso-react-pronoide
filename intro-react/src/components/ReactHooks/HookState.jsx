import React, { useState } from 'react'

const HookState = () => {
  const [nombre, setNombre] = useState('Ángel')
  const [apellido, setApellido] = useState('Villalba')

  return (
    <div>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <p>Nombre completo: {nombre} {apellido}</p>
    </div>
  )
}

export default HookState
