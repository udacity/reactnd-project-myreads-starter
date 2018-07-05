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

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Access the Memory Game: https://pedroarvellos.github.io/memory-game.github.io/

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
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── css # Styles for the app.
    │   ├── App.css
    │   ├── index.css 
    ├── icons # Helpful images for your app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── js # js files for the app.
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
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.

The project can be opened in any text editor, for example: _Sublime Text_, _Visual Studio_,  _Atom_, etc. To execute the project.

