require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config')
const books = require('./books')

const app = express()

if (process.env.NODE_ENV !== 'production')
  app.use(morgan('dev'))

app.use(cors())

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Book Lender API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /books
    GET /books/:id
    PUT /books/:id { shelf }
    POST /search { query, maxResults }
  </pre>
  `

  res.send(help)
})

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})

app.get('/books', (req, res) => {
  books.getAll(req.token).then(
    books => {
      res.send({ books })
    },
    error => {
      console.error(error)

      res.status(500).send({
        error: 'There was an error retrieving all books'
      })
    }
  )
})

app.get('/books/:id', (req, res) => {
  const { id } = req.params

  books.get(req.token, id).then(
    book => {
      res.send({ book })
    },
    error => {
      console.error(error)

      res.status(500).send({
        error: `There was an error fetching book ${id}`
      })
    }
  )
})

app.put('/books/:id', bodyParser.json(), (req, res) => {
  const { id } = req.params
  const { shelf } = req.body

  if (shelf) {
    books.update(req.token, id, shelf).then(
      data => {
        res.send(data)
      },
      error => {
        console.error(error)

        res.status(500).send({
          error: `There was an error updating book ${id}`
        })
      }
    )
  } else {
    res.status(403).send({
      error: 'Please provide a shelf in the request body'
    })
  }
})

app.post('/search', bodyParser.json(), (req, res) => {
  const { query, maxResults } = req.body

  if (query) {
    books.search(req.token, query, maxResults).then(
      books => {
        res.send({ books })
      },
      error => {
        console.error(error)

        res.status(500).send({
          error: 'There was an error performing your search'
        })
      }
    )
  } else {
    res.status(403).send({
      error: 'Please provide a query in the request body'
    })
  }
})

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
