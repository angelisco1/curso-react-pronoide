const axios = require('axios')

const baseUrl = 'https://ejemplos-dc1c1.firebaseio.com'
const recurso = '/clone-memezinga'
const url = `${baseUrl}${recurso}`

function getMemes() {
  return axios.get(url + '.json')
    .then(resp => {
      return mapToObjects(resp.data)
    })
}

function getMemeById(memeId) {
  return axios.get(`${url}/${memeId}.json`)
    .then(resp => {
      return {id: memeId, ...resp.data}
    })
}

function createMeme(meme) {
  return axios.post(url + '.json', JSON.stringify(meme))
    .then(resp => {
      console.log('ID: ', resp.data.name)
      return {...meme, id: resp.data.name}
    })
}

function updateMeme(memeId, memeActualizada) {
  return axios.put(`${url}/${memeId}.json`, JSON.stringify(memeActualizada))
    .then(resp => {
      return memeActualizada;
    })
}

function deleteMeme(memeId) {
  return axios.delete(`${url}/${memeId}.json`)
    .then(resp => {
      return {msg: `Deleted ${memeId}`}
    })
}

function mapToObjects(map) {
  const memes = [];

  for (const id in map) {
    memes.push({id: id, ...map[id]});
  }

  return memes;
}

module.exports = {
  getMemes,
  getMemeById,
  createMeme,
  updateMeme,
  deleteMeme
}