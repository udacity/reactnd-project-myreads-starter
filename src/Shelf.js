import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component{
  render(){
    const {moveBookTo, shelfTitle, booksInShelf} = this.props
    return(
      <div className="bookshelf">
            <h2>{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksInShelf
                        .map((book) => {
                            return <li key={book.id}>
                                <Book book={book} moveBookTo={moveBookTo}/>
                            </li>
                        })
                      }
                </ol>
            </div>
      </div>
    )
  }
}

export default Shelf