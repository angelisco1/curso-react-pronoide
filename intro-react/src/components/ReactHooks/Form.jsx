import React, { useEffect, useState } from 'react'


const useInputForm = (initValue, regExps = []) => {
  const [value, setValue] = useState(initValue)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const valido = regExps.every(reg => {
      return value.match(reg)
    })
    setIsValid(valido)
  }, [value])

  return [
    value,
    (e) => setValue(e.target.value),
    isValid
  ]
}

const Form = () => {
  const [nombre, onChangeNombre, nombreValido] = useInputForm('Ángel', [new RegExp('[a-zA-Z]{3,}')])
  const [pass, onChangePass] = useInputForm('1234')

  return (
    <div>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={nombre} onChange={onChangeNombre} />
        {nombreValido ? null : <span>Error, el nombre no es válido</span>}
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" value={pass} onChange={onChangePass} />
      </div>
    </div>
  )
}

export default Form
