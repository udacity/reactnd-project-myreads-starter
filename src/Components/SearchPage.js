import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
class SearchPage extends Component {

    render() {
        console.log("SearchPage")

        let {searchBooks,searchList,updateBook,search} = this.props
        let searchView;
        console.log(searchList)
        if(searchList.length>0){
        searchView = searchList.map((book)=>{
            return <Book updateBook={updateBook} key={book.id} book={book} search={search}/>
        }) 
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={'/'}><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper"> 
                        <input type="text" placeholder="Search by title or author" onChange={(e)=>searchBooks(e.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {searchView}</ol>
                </div>
            </div>)
    }
}

export default SearchPage