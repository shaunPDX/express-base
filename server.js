const express = require('express')
const app = express()
var cors = require('cors')
const port = 8080

app.use(cors())

const happyPath = require('./data/happy_path.json')
const unhappyPath = require('./data/unhappy_path.json')
const edgecasePath = require('./data/edgecase_path.json')

app.get('/', (req, res) => res.send('PICK A PATH YOU DONKEY'))

app.get('/happy-path', (req, res) => res.send(happyPath))
app.get('/unhappy-path', (req, res) => res.send(unhappyPath))
app.get('/edgecase-path', (req, res) => res.send(edgecasePath))
app.get('/error-path', (req, res) => res.sendStatus(404))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))