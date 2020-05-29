import React from 'react'

const ListaDatos = ({datos}) => {
  const listaDatos = datos.map(d => {
    return <li key={d.id}>{d.joke}</li>
  })

  return (
    <ul>
      {listaDatos}
    </ul>
  )
}

export default ListaDatos