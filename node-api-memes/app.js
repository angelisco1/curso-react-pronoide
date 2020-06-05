const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: '*'
}));

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/bauth', (req, res, next) => {
  const authBasic = req.get('Authorization')

  if (authBasic) {
    const [usuario, password] = Buffer.from(authBasic.replace('Basic ', ''), 'base64').toString('ascii').split(':');

    if (!(['admin', 'falco', 'charly'].includes(usuario) &&  ['1234', 'admin', 'root'].includes(password))) {
      return res.status(401).json({msg: 'Invalid authentication'})
    }
  }
  next()
})

// A este path pasan por la autenticación básica
app.use('/bauth/api', routes)

// A este path no se necesita autenticación
app.use('/api', routes)

app.get('/', (req, res, next) => {
  res.sendFile('index.html');
})

app.use((req, res, next) => {
  res.status(404).json({error: 'Meh!'})
})

const server = http.createServer(app);
server.listen(8081, '127.0.0.1', () => {
  console.log('Listening on localhost:8081...')
})