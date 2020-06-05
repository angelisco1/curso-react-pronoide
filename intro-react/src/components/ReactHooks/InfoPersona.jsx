import React, { useState, useMemo } from 'react'

const InfoPersona = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')

  const nombreCompleto = useMemo(() => {
    console.log('Pasa por el nombreCompleto')
    return nombre + ' ' + apellido;
  }, [nombre, apellido])

  return (
    <div>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <p>Nombre completo: {nombreCompleto}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default InfoPersona
