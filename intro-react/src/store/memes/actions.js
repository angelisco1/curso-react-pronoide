// import { ADD_MEME, EDIT_MEME, DELETE_MEME, GET_MEMES } from './action-types'
import * as ActionTypes from './action-types';
import axios from 'axios';

const url = 'https://ejemplos-dc1c1.firebaseio.com/memes-de-angel'

export function crearAddMemeAction(meme) {
  return (dispatch)  => {

    axios.post(url + '.json', JSON.stringify(meme))
      .then(resp => {
        dispatch(getAddAction({...meme, id: resp.data.name}))
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
  return (dispatch) => {
    axios.delete(`${url}/${idMeme}.json`)
      .then(() => {
        dispatch(getDeleteAction(idMeme))
      })
  }
}

function getDeleteAction(idMeme) {
  return {
    type: ActionTypes.DELETE_MEME,
    payload: idMeme
  }
}

export function crearGetMemesAction() {
  return (dispatch) => {
    axios.get(url + '.json')
      .then(resp => {
        const memes = []

        for (const id in resp.data) {
          const meme = {...resp.data[id], id}
          memes.push(meme)
        }

        dispatch(getMemesAction(memes))
      })
  }
}

function getMemesAction(memes) {
  return {
    type: ActionTypes.GET_MEMES,
    payload: memes
  }
}