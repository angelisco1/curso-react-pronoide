import React from 'react'

const NombreCompleto = (props) => {
  // console.log(props);
  return (
    <div style={{display: 'flex'}}>
      <img src="https://placeimg.com/80/80/animals" alt=""/>
      <p>{props.nombre} {props.apellido}</p>
    </div>
  )
}

export default NombreCompleto