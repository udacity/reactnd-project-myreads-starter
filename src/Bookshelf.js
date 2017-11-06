import React from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Bookshelf extends React.Component {
  state = {
    books:[],
    shelf: ''
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      console.log("Resgatando lista de livros");
      console.log(books);
      this.setState({
        shelf: this.props.shelf,
        books: books.filter(book => book.shelf === this.props.shelf)
      });
      console.log("Lista de livros recuperada com SUCESSO\n");
    })
  }

  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.state.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.state.books.map((book) => (
              <li key={book.id}>
                <Book
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  cover={book.imageLinks.thumbnail}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

}

export default Bookshelf;
