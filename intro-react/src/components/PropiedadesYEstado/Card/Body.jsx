import React from 'react'
import TituloSubtitulo from './TituloSubtitulo'

const Body = ({titulo, subtitulo, text}) => {
  return (
    <div>
      <TituloSubtitulo titulo={titulo} subtitulo={subtitulo} />
      <p>{text}</p>
    </div>
  )
}

export default Body
