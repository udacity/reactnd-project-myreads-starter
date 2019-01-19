# App.js
Passes books array as state, after mount it gets all books. It renders all the shelves and has a button to searchPage.js

# Book.js
Passes title and authors, styles the book component and has selector for shelves

# ShelfSelector.js
Sets default shelf on dropdown, on select it changes the book from no shelf/current shelf to the selected one

# Shelf.js
Filters the books depending on the book's shelf and then maps through each to generate the html tags. It passes book and updateShelf to each book. 

# SearchPage.js 
Has a state with results array and query strings. Displays books / results based on the query.
Renders SearchBar and displays results using the array filled by searchbar query, then mapping over them to pass book and updateShelf.

# SearchBar.js
Has an input that filters books that have no shelf based on query. Passes the resultant array to SearchPage in order to display the books.
