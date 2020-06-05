// import { ADD_MEME, EDIT_MEME, DELETE_MEME, GET_MEMES } from './action-types'
import * as ActionTypes from './action-types';
import axios from 'axios';

const url = 'http://localhost:8081/api/memes'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export function crearAddMemeAction(meme) {
  return (dispatch)  => {
    axios.post(url, JSON.stringify(meme), config)
      .then(resp => {
        const meme = resp.data
        dispatch(getAddAction(meme))
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
    axios.delete(`${url}/${idMeme}`)
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
    axios.get(url, config)
      .then(resp => {
        const memes = resp.data
        console.log(memes)
        dispatch(getMemesAction(memes || []))
      })
  }
}

function getMemesAction(memes) {
  return {
    type: ActionTypes.GET_MEMES,
    payload: memes
  }
}