# MyReads Project

This is a React App that is used to add and track books that you want to read, read and are currently reading. There is a search feature that lets you look for books within a set list of keywords and add them to your shelves. 

## How to install & Run

To get started:

* Clone the repository in your local machine with `git clone https://github.com/artnerdnet/reactnd-project-myreads-starter.git`
* Navigate to the directory and install the dependencies with `npm install`
* Initiate server with `npm start`

## Backend Server

This project depends on a Backend server provided by Udacity. The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform the operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
