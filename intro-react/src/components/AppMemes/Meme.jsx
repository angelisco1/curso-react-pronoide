import React from 'react'

const Meme = ({texto1, img, texto2, color}) => {
  const styles = {
    color
  }

  return (
    <div>
      <p style={styles}>{texto1}</p>
      <img src={img} alt="Imagen del meme" />
      <p style={styles}>{texto2}</p>
    </div>
  )
}

export default Meme
