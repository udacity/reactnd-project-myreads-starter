import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Shelves from'./Shelves'



class MainPage extends React.Component {

    render() {
        const { books, UpdateShelfBook}=this.props;
        return (
          
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>

                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                 <Shelves books={books.filter(book => book.shelf === "currentlyReading")} UpdateShelfBook={UpdateShelfBook}  />
                                </div>
                            </div>


                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                 <Shelves books={books.filter(book => book.shelf === "wantToRead")} UpdateShelfBook={UpdateShelfBook} />
                                </div>
                            </div>


                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                <Shelves books={books.filter(book => book.shelf === "read")} UpdateShelfBook={UpdateShelfBook} />  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="open-search">

                    
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link> 
                    

                    </div>
                </div>
        
        );
    }




}

export default MainPage;