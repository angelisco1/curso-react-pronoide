import React from 'react'

const ListaDatos = ({datos, titulo}) => {
  const listaDatos = datos.map(d => {
    return <li key={d.id}>{d.joke}</li>
  })

  return (
    <React.Fragment>
      <h3>{titulo}</h3>
      <ul>
        {listaDatos}
      </ul>
    </React.Fragment>
  )
}

export default ListaDatos