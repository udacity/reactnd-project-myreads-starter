# MyReads
by Smarajit Dasgupta

A library management app. Assignment #1 for Udacity React nanodegree program.

The project involves building the React components to populate the main page and search page with books. The main page has three shelves and the users are able to move the books between shelves. The search page allows users to search for new books via a given API server to add to their shelves.The project uses React's setState to build the functionality to move books from one shelf to another.

## Pre-requisite

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/en/)

## Setting up

* [Download](https://github.com/smarajitdasgupta/reactnd-project-myreads-starter/archive/master.zip) / Clone repository `git clone https://github.com/smarajitdasgupta/reactnd-project-myreads-starter.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Search Limitation

The backend API uses a fixed set of search results and is limited to a set of search terms, which can be found in [SEARCH_TERMS.md](https://github.com/smarajitdasgupta/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md).

To do:

1. Apps.js: update state without needing to call the API again
2. Apps.js: 404 Switch
3. stay on the search page after you add a book so that you can add multiple books
4. SearchBooks: Books in search results should have the shelf they're on selected in the dropdown for that book, and if a book is not on a shelf then it should not have any shelf (or a "None" shelf) selected.
5. Readme cleanup
6. App.js: Separate list-books component

