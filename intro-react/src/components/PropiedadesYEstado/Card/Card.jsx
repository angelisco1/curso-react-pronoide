import React from 'react'
import Avatar from './Avatar'
import Image from './Image'
import Body from './Body'
import Footer from './Footer'
import PropTypes from 'prop-types'

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

Card.defaultProps = {
  urlImage: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
}

Card.propTypes = {
  urlImage: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    urlImage: PropTypes.string,
    titulo: PropTypes.string,
    subtitulo: PropTypes.string,
  })
}

export default Card