import React from 'react'
import Select from './Select'
import './App.css'

class BookShelf extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.multiSelectInput = null;
        this.setMultiSelectInput = element => {
            this.multiSelectInput = element;
        };
    }

    state = {
        isMultiSelect: false,
        multiSelectValue: ''
    }

    updateMultiSelect(e) {
        this.setState({
            isMultiSelect: e.target.checked
        })
    }


    moveMultiBookToBookShelf(e) {
        this.setState({
            isMultiSelect: false
        },() => {
            this.multiSelectInput.checked = false
        })
        this.props.books.filter((book) => book.selected).forEach((book) => {
            this.props.moveToBookShelf({id: book.id}, e)
        })
    }

    render() {
        const books= this.props.books;
        return (
                <div className="bookshelf-books">
                    <i className="book-shelf-multiSelect">
                        <input ref={this.setMultiSelectInput} type="checkbox" value={this.state.isMultiSelect} onChange={(e) => this.updateMultiSelect(e)}/>&nbsp;<span>多选</span><br/>
                        {this.state.isMultiSelect &&
                        <div style={{ right: '-50px', top: '-3px' }} className="book-shelf-changer"><Select value={this.state.multiSelectValue} selectCallback={(e) => this.moveMultiBookToBookShelf(e)}/></div>
                        }
                    </i>
                    <ol className="books-grid">
                      {
                        books.map((book, index) => {
                            return (
                                <li key={book.id}>
                                    <div className="book">
                                      <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(` + book.imageLinks.smallThumbnail+`)` }}></div>
                                            
                                              {this.state.isMultiSelect ? <div className="book-shelf-selecter"><input type="checkbox" value={book.selected} onChange={(e) => this.props.updateBookSelect(e.target.checked, book.id)}/></div>
                                               : <div className="book-shelf-changer"><Select value={book.shelf} selectCallback={(e) => this.props.moveToBookShelf(book, e)}/></div> }
                                                   
                                      </div>
                                      <div className="book-title">{book.title}</div>
                                      <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                                )
                            })
                      }
                    </ol>
                </div>
        )
    }
}

export default BookShelf