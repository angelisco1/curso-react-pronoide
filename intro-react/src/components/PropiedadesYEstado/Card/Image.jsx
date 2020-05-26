import React from 'react'

const Image = (props) => {
  const styles = {
    width: props.size === 'grande' ? '100%' : '80px'
  }
  return (
    <img style={styles} src={props.urlImage} alt="Imagen" />
  )
}

export default Image
