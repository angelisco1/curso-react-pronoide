import React from 'react'
import Avatar from './Avatar'
import Image from './Image'
import Body from './Body'
import Footer from './Footer'

const Card = ({avatar, urlImage, body, footer}) => {

  console.log(avatar)
  console.log(footer)
  console.log(body)
  return (
    <div style={{width: '350px', border: '1px solid black'}}>
      {/* <Avatar titulo={avatar.titulo} subtitulo={avatar.subtitulo} /> */}
      <Avatar {...avatar} />
      <Image urlImage={urlImage} size="grande" />
      <Body {...body} />
      <Footer {...footer} />
    </div>
  )
}

export default Card