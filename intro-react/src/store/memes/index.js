import * as ActionTypes from './action-types';
import {v4 as uuidV4} from 'uuid'

const initialState = {
  listaMemes: []
}

function addMeme(state, meme) {
  // meme.id = uuidV4()
  return {
    listaMemes: [...state.listaMemes, meme]
  }
}

function deleteMeme(state, idMeme) {
  const nuevaListaMemes = state.listaMemes.filter(meme => meme.id != idMeme);
  return {
    listaMemes: nuevaListaMemes
  }
}

export default function memes(state = initialState, action) {
  // console.log('RED: ', action)
  // console.log('STATE: ', state)
  switch(action.type) {
    case ActionTypes.ADD_MEME:
      return addMeme(state, action.payload);
    case ActionTypes.EDIT_MEME:
      return state;
    case ActionTypes.DELETE_MEME:
      return deleteMeme(state, action.payload);
    case ActionTypes.GET_MEMES:
      return {listaMemes: action.payload};
    default:
      return state;
  }
}