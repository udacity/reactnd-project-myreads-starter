require('isomorphic-fetch')
const invariant = require('invariant')
const clone = require('clone')

const apiKey = process.env.GOOGLE_BOOKS_API_KEY

invariant(
  apiKey,
  'Missing $GOOGLE_BOOKS_API_KEY environment variable'
)

const db = {}

const defaultData = {
  currentlyReading: [ 'PGR2AwAAQBAJ', 'yDtCuFHXbAYC' ],
  wantToRead: [ 'uu1mC6zWNTwC', 'wrOQLV6xB-wC' ],
  read: [ 'pD6arNyKyi8C', '1q_xAwAAQBAJ', '32haAAAAMAAJ' ]
}

const getData = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const getShelf = (token, bookId) => {
  const data = getData(token)
  const keys = Object.keys(data)
  return keys.find(key => data[key].includes(bookId)) || 'none'
}

const addShelf = (token) => (book) => {
  book.shelf = getShelf(token, book.id)
  return book
}

const api = 'https://www.googleapis.com/books/v1'

const createBook = (item) => Object.assign({}, item.volumeInfo, {
  id: item.id
})

const get = (token, id) =>
  fetch(`${api}/volumes/${id}?key=${apiKey}`)
    .then(res => res.json())
    .then(createBook)
    .then(addShelf(token))

const getAll = (token) => {
  console.log("Getting all books.")
  const data = getData(token)
  const bookIds = Object.keys(data).reduce((memo, shelf) => (
    memo.concat(data[shelf])
  ), [])

  return Promise.all(bookIds.map(bookId => get(token, bookId)))
}

const update = (token, bookId, shelf) =>
  new Promise(resolve => {
    const data = getData(token)

    Object.keys(data).forEach(s => {
      if (s === shelf) {
        if (!data[s].includes(bookId))
          data[s].push(bookId)
      } else {
        data[s] = data[s].filter(id => id !== bookId)
      }
    })

    resolve(data)
  })

const search = (token, query, maxResults = 20) =>
  fetch(`${api}/volumes?key=${apiKey}&q=${encodeURIComponent(query)}&maxResults=${maxResults}&fields=items(id,volumeInfo)`)
    .then(res => res.json())
    .then(data => data.items.map(createBook))
    .then(books => books.map(addShelf(token)))

module.exports = {
  get,
  getAll,
  update,
  search
}
