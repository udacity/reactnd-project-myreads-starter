# MyReads Project
This is the starter template for the final assessment project for Udacity's. The project is about creating a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.The main page has three shelves that users are able to move the books between shelves. The search page allows users to search for new books to add to their shelves. After selecting books to add to shelves, when you navigate by routing ('/') for main page and ('/search') for search page, you can instantly see the selections made on the search page.


## TL;DR
To get started developing right away:
* install all project dependencies with `npm install`
* start the development server with `npm start`
* Open automatically 'http://localhost:3000/' on web browser.

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
    ├── App.css # Styles for your app.    
    ├── App.js # This is the root of your app, contains the routing that used in the project for both pages.
    ├──Book.js # it return the jsx that related to the reflected books.
    ├── MainPage.js # contains the shelves components
    ├── HomeShelves.js # contains the book component 
    ├── Search.js # represent the search page and contains the book component
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server
 The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

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
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). 

## Client side 
we have three main functions:

### `componentDidMount`
Here is the fun started, the place where we start to fetch and get all books from the backend-server.

### `moveBooks`
function which is controlling & transfering the books from shelf to another and from search page to the main the page. 

whether the shelf is set to none or not, you set them to a shelf and update your state 

### `searchBooks`
first, you have to make sure that you are reciving the right query or value to update your state with that value or even return [].

