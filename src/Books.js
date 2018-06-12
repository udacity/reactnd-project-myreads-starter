
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  Book  from './Book'


class Books extends React.Component{

    render (){

        const { booksList } = this.props

        const currently = booksList.filter((book)=> (
            book.shelf === 'currentlyReading'         
        ))
        const want = booksList.filter((book)=> (
            book.shelf === 'wantToRead'         
        ))
        const read = booksList.filter((book)=> (
            book.shelf === 'read'         
        ))

        
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
                            <ol className="books-grid">
                                 <Book books={currently}/>
                            </ol>
                        </div>
                    </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                     <Book books={want} />
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <Book books={read} />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        className = "open-search"
                        to = "/search" >
                            Add a Book
                    </Link>
                </div>
            </div>
        )
    }  
}

export default Books    