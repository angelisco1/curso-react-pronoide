import React, { useEffect } from 'react'
import GeneradorMeme from './GeneradorMeme'
import ListaMemes from './ListaMemes'
import { connect } from 'react-redux'
import { crearGetMemesAction } from '../../store/memes/actions'

const AppMemes = ({initMemes}) => {

  useEffect(() => {
    initMemes()
  }, [])

  return (
    <div>
      <GeneradorMeme />
      <ListaMemes />
    </div>
  )
}


const mapDispatchToProps = {
  initMemes: crearGetMemesAction
}

export default connect(null, mapDispatchToProps)(AppMemes)
