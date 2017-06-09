This is the starter template for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

To simplify your development process, Udacity has provided a backend server for you to develop against. The provided file `BooksAPI.js` contains the methods you will need to perform necessary operations on the backend:

`getAll()` 
Returns a Promise<JSON> which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.

`update(book, shelf)`
book: <Object> containing at minimum an `id` attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]  
Returns a Promise<JSON> which resolves to a JSON object containing the response data of the POST request

`search(query, maxResults)`
query: <String>
maxResults: <Integer> Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
Returns a Promise<JSON> which resolves to a JSON object containing a collection of book objects. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
