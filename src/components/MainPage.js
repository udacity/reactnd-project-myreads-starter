import React , { Component } from 'react';
import Shelf from './Shelf';

class MainPage extends React.Component {

  getCurrentShelfBooks(shelfName){
    return this.props.books.filter((book) => book.shelf === shelfName)
  }  

    render() {
        return (
          <div className="list-books-content">
                            <div>
                                <Shelf
                                    shelfName="Currently Reading"
                                    books={this.getCurrentShelfBooks("currentlyReading")}
                                    changeBookShelf={this.props.changeBookShelf}
                                />
                                <Shelf
                                    shelfName="Want to Read"
                                    books={this.getCurrentShelfBooks("wantToRead")}
                                    changeBookShelf={this.props.changeBookShelf}
                                />
                                <Shelf
                                    shelfName="Read"
                                    books={this.getCurrentShelfBooks("read")}
                                    changeBookShelf={this.props.changeBookShelf}
                                />
                            </div>
                        </div>
        )
    }

}
export default MainPage;