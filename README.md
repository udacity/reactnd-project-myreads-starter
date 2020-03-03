# my-reads.github.io

My reads is one of the last projects developed during the Advanced Nanodegree Front-End Web Developer course, and was created to implement a personal shelf which allows users to manupulate books they are reading, books they want to read and books they've already read. This project was build through React and uses the purest concept of ES6.

It is important to mention this project uses an API provided and described by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* getAll() is responsible to return a promise with a collection of books (the ones which are supposed to be in the bookshelf)

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` this is the object which should contain an id related to the book itself
* shelf: `<String>` this is a string which represents the position of this book in the shelf, in other words, want to read, currently reading or read
* Returns a Promise with a list of id's related to the books and also returns the shelf position each book is

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise with a collection of books

## Important
This backend provided by Alura does its search in a limited amount of books, so do not hesitate if you don't get an expected book.

## How to use

Download the project directly or go to a specific folder and download it by git:

* `git init` 

* `git clone https://github.com/pedroarvellos/`

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html
└── src
    ├── css 
    │   ├── App.css
    │   ├── index.css 
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── js
    │   ├── book
    │   │   ├── Book.js
    │   │   ├── BookStatus.js
    │   ├── book-shelf
    │   │   ├── BookShelf.js
    │   │   
    │   ├── search
    │   │   ├── Search.js
    │   │   
    │   ├── service
    │   │   ├── BooksAPI.js
    │   │   
    ├── App.js
    ├── App.test.js 
    └── index.js 

The project can be opened in any text editor, for example: _Sublime Text_, _Visual Studio_,  _Atom_, etc. To execute the project.

