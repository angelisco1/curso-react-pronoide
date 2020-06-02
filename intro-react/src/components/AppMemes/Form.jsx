import React from 'react'
import { connect } from 'react-redux'
import { crearAddMemeAction } from '../../store/memes/actions'

const Form = ({texto1, texto2, color, img, onHandleChange, crearAddMemeAction, onResetState}) => {
  return (
    <div>
      <form onSubmit={
        (e) => {
          e.preventDefault();
          crearAddMemeAction({texto1, texto2, color, img})
          onResetState()
        }
      }>
        <div>
          <label htmlFor="textoArriba">Texto de arriba:</label>
          <input type="text" id="textoArriba" name="texto1" value={texto1} onChange={onHandleChange} />
        </div>
        <div>
          <label htmlFor="textoAbajo">Texto de abajo:</label>
          <input type="text" id="textoAbajo" name="texto2" value={texto2} onChange={onHandleChange} />
        </div>
        <div>
          <label htmlFor="imgMeme">Url de la imagen:</label>
          <input type="text" id="imgMeme" name="img" value={img} onChange={onHandleChange} />
        </div>
        <div>
          <label htmlFor="colorLetra">Color:</label>
          <input type="color" id="colorLetra" name="color" value={color} onChange={onHandleChange} />
        </div>
        <button type="submit">Guardar Meme</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  crearAddMemeAction
}

const withProps = connect(null, mapDispatchToProps);
export default withProps(Form)
