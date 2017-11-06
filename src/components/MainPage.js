import React , { Component } from 'react';

class MainPage extends React.Component {

  state = {
    MainPagebooks: [],
  };

  getCurrentShelfBooks(shelfName){
    return this.state.MainPagebooks.filter((book) => book.shelf === shelfName)
  }  

componentDidMount() {
    this.getAllBooks();
}

getAllBooks() {
    BooksAPI.getAll().then((books) => {
        this.setState({books});
    });
}

    render() {
        return (
          <div className="list-books-content">
                            <div>
                                <Shelf
                                    shelfName="Currently Reading"
                                    books={this.getCurrentShelfBooks("currentlyReading")}
                                    changeShelf={this.props.changeBookShelf}
                                />
                                <Shelf
                                    shelfName="Want to Read"
                                    books={this.getCurrentShelfBooks("wantToRead")}
                                    changeShelf={this.props.changeBookShelf}
                                />
                                <Shelf
                                    shelfName="Read"
                                    books={this.getCurrentShelfBooks("read")}
                                    changeShelf={this.props.changeBookShelf}
                                />
                            </div>
                        </div>
        )
    }

}