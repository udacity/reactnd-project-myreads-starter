import React,{Component} from 'react';
import FrontPage from './FrontPage.js'
import Book from './Book.js'
import './App.css'

class BookShelf extends Component{

render(){
return(
  <div>
  <div className="bookshelf">
  <h2 className="bookshelf-title">{this.props.name}</h2>

<div className="bookshelf-books">
<ol className="books-grid">
{this.props.books.map(book =>
(

  <Book key={book.id} id={book.id} book={book} title= {book.title} image={book.imageLinks.thumbnail} onUpdateShelf={this.props.onUpdateShelf} shelf={this.props.name}/>

))}


</ol>
</div>
  </div>
</div>


)



}

}
export default BookShelf
