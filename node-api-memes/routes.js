const express = require('express')
const MemesService = require('./memes-service')

const router = express.Router()

router.get('/memes', async (req, res, next) => {
  const memes = await MemesService.getMemes()
  console.log('GET')
  res.status(200).json(memes)
})

router.get('/memes/:id', async (req, res, next) => {
  const id = req.params.id
  console.log('GET ID')
  const meme = await MemesService.getMemeById(id)
  res.status(200).json(meme)
})

router.post('/memes', async (req, res, next) => {
  const meme = req.body
  console.log('POST')
  console.log(meme)
  const nuevoMeme = await MemesService.createMeme(meme)
  console.log(nuevoMeme)
  res.status(200).json(nuevoMeme)
})

router.put('/memes/:id', async (req, res, next) => {
  const meme = req.body
  console.log('PUT')
  const memeId = req.params.id
  const memeActualizada = await MemesService.updateMeme(memeId, meme)
  res.status(200).json(memeActualizada)
})

router.delete('/memes/:id', async (req, res, next) => {
  const id = req.params.id
  console.log('DEL')
  const msg = await MemesService.deleteMeme(id)
  res.status(200).json(msg)
})

module.exports = router