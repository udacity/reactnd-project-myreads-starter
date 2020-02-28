# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. The MyReads project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

## TL;DR

To get started:

* clone project with `https://github.com/susumoa/reactnd-project-myreads-starter.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Usage

* Main Page:

The main page shows three bookshelves: Currently Reading, Want To Read and Read. Each shelf displayes only those books whose shelf parameter is equal to the shelf it is displayed on. A book shows the cover, the title and the authors. The shelf can be changed with the ShelfChanger button (green button with white triangle on bottom right of the cover). When the ShelfChanger selector is open the book's current shelf is highlighted. To move the book, click on another shelf or choose None to remove from the shelves entirely. The shelf has been changed and then the book moves to the other shelf or disappears. At the lower right corner of the main page is a button. When the button is clicked, the search page is displayed.

* Search Page:

The search page shows a search input field. As the user types into the search field, books that match the query are displayed on the page, along with their covers, titles and authors. When the query is deleted, the page displayes nothing. If SEARCH_TERMS.md doesn't contains the query, the page displays a message: "Sorry, no books found. Try again!" The searched books have the ShelfChanger button (green button with white triangle on bottom right of the cover). When the ShelfChanger selector is open the book's current shelf or if it's not on any shelf, "None" is highlighted. To move the book, click on another shelf or choose None to remove from the shelves entirely. The shelf has been changed and now the ShelfChanger highlights the new shelf. At the left side of the search input field is a link. When the link is clicked, the main page is displayed with the new changes in the bookshelves.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).