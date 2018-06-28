import React,{Component} from 'react'
import BookShelfChanger from './BookShelfChanger';

class BookShelf extends Component {    
    render() {
        return(
            <ol className="books-grid">
                {this.props.books.map((book) => (
                <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <BookShelfChanger shelfList={this.props.shelfList} selectedShelf={book.shelf}/>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
              </div>
            </li>                    
        ))
        }
      </ol>)
    }
}

export default BookShelf