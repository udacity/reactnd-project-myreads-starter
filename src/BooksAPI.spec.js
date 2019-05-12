const frisby = require('frisby')

const api = 'https://reactnd-books-api.udacity.com'
const api_books = api + '/books'
const api_book = api + '/books/IOejDAAAQBAJ'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random()
        .toString(36)
        .substr(-8)

const headers = {
    Accept: 'application/json',
    Authorization: token
}

it('GET should return books', () => {
    return frisby
        .setup({
            request: {
                headers
            }
        })
        .get(api_books)
        .expect('status', 200)
})

it('GET should return a book', () => {
    return frisby
        .setup({
            request: {
                headers
            }
        })
        .get(api_book)
        .expect('status', 200)
        .then(function(res) {
            let body = res.body
            body = JSON.parse(body)

            // console.log(Object.keys(body.book))

            expect(Object.keys(body.book)).toEqual([
                'title',
                'subtitle',
                'authors',
                'publisher',
                'publishedDate',
                'description',
                'industryIdentifiers',
                'readingModes',
                'pageCount',
                'printType',
                'categories',
                'maturityRating',
                'allowAnonLogging',
                'contentVersion',
                'panelizationSummary',
                'imageLinks',
                'language',
                'previewLink',
                'infoLink',
                'canonicalVolumeLink',
                'id',
                'shelf'
            ])
        })
})
