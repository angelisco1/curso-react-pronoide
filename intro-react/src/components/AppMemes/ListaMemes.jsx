import React from 'react'
import { connect } from 'react-redux'
import Meme from './Meme'

const ListaMemes = ({listaMemes}) => {
  const listaMemesComponents = listaMemes.map(meme => <Meme key={meme.id} {...meme} />)

  return (
    <div>
      {listaMemesComponents}
    </div>
  )
}

const mapStateToProps = (state) => ({
  listaMemes: state.memesReducer.listaMemes
})

// const withProps = connect(mapStateToProps)
// export default withProps(ListaMemes)
export default connect(mapStateToProps)(ListaMemes)
