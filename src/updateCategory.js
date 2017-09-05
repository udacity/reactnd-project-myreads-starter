export const updateCategory = (book, category) => {
  let books=this.state.books;
  let shelfMove=this.state.books.findIndex((b) => b.id === book.id);
  books[shelfMove].shelf = category
  let newBook = books[shelfMove]
  books.splice(shelfMove, 1)
  books.push(newBook)
  this.setState({
    books: books
  })
  BooksAPI.update(newBook, category)
}