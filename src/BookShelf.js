import React,{Component} from 'react';
import FrontPage from './FrontPage.js'
import Book from './Book.js'
import './App.css'

class BookShelf extends Component{
  // catches an error if there is no book thumbnail, returns null so book will still be displayed with no picture
  catchError = (book) => {
  if(book.imageLinks == null)
  return(null)
  else return (book.imageLinks.thumbnail)
  }

render(){// loops through app.js state and displays each book contained in that state
return(
  <div>
  <div className="bookshelf">
  <h2 className="bookshelf-title">{this.props.name}</h2>

<div className="bookshelf-books">
<ol className="books-grid">
{this.props.books.map(book =>
(

  <Book key={book.id} id={book.id} book={book} title= {book.title} image={this.catchError(book)} onUpdateShelf={this.props.onUpdateShelf} shelf={this.props.name}/>

))}


</ol>
</div>
  </div>
</div>


)



}

}
export default BookShelf
