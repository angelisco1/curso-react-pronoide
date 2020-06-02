// import { ADD_MEME, EDIT_MEME, DELETE_MEME, GET_MEMES } from './action-types'
import * as ActionTypes from './action-types';

export function crearAddMemeAction(meme) {
  // console.log('ACTIONS: ', meme)
  return (dispatch)  => {
    axios.post('', JSON.stringify(meme))
      .then(resp => {
        // dispatch(getAddAction(meme))
      })
  }
}

function getAddAction(meme) {
  return {
    type: ActionTypes.ADD_MEME,
    payload: meme
  }
}

export function crearEditMemeAction(meme) {
  return {
    type: ActionTypes.EDIT_MEME,
    payload: meme
  }
}

export function crearDeleteMemeAction(idMeme) {
  return {
    type: ActionTypes.DELETE_MEME,
    payload: idMeme
  }
}



export function crearGetMemesAction() {
  return {
    type: ActionTypes.GET_MEMES,
    payload: memes
  }
}