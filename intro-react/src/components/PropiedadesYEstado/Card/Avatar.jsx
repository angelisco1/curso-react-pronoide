import React from 'react'
import Image from './Image'
import TituloSubtitulo from './TituloSubtitulo'


const Avatar = ({urlImage, titulo, subtitulo}) => {
  return (
    <div style={{display: 'flex'}}>
      <Image urlImage={urlImage} />
      <TituloSubtitulo titulo={titulo} subtitulo={subtitulo} />
    </div>
  )
}

export default Avatar
