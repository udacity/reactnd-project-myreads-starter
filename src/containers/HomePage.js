import React from "react"
import {Link} from "react-router-dom"
import Bookshelf from "../components/Bookshelf"


function HomePage(props) {
    const books = props.books
    const onMoveBook = props.onMoveBook
    const shelves = [
        {
            key: "currentlyReading",
            title: "Currently Reading"
        },
        {
            key: "wantToRead",
            title: "Want to Read"
        },
        {
            key: "read",
            title: "Read"
        }
    ]
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelves.map(shelf => (
                        <Bookshelf key={shelf.key}
                                   shelfName={shelf.title}
                                   books={books.filter((book) => {
                                       return book.shelf === shelf.key;
                                   })}
                                   onMoveBook={onMoveBook}
                        />
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}



export default HomePage