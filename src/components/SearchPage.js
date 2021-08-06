import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Callbacks from '../components/Callbacks';
import * as BooksAPI from '../BooksAPI';
import BookOptions from "./BookOptions";
class SearchPage extends Component {
    state = {
        searchText: '',
        tempSearchResults: [],
    };

    handleOnChange = (searchWord) => {
        this.setState(() => ({
            searchText: searchWord.trim()
        }))
        this.findBook(searchWord.trim());
    }

    findBook = (searchQuery) => {
        if (searchQuery !== '') {
            BooksAPI.search(searchQuery).then((response) => {
                if ((typeof response !== 'object') || (typeof response !== 'undefined')) {
                    this.setState(() => ({
                        tempSearchResults: [response]
                    }))
                }
            })
        }
    }

    render() {
        //let newBook = [];
        const { tempSearchResults, searchText } = this.state;
        // const displaySearchResults = (searchText) === ''
        //     ? []
        //     : tempSearchResults.filter(o => o.)
        //     // : tempSearchResults.map((bookElement, index) => {
        //     //         console.log('ELEMENT', bookElement[index])
        //     //         return bookElement[index]
        //     //     }).filter((book) => {
        //     //     if (typeof book.title !== 'undefined') {
        //     //         newBook.push(book)
        //     //         console.log('BOOKS', newBook)
        //     //        return book.title.toLowerCase().includes(searchText.toLowerCase())
        //     //     }
        //     //     return newBook
        //     // }
        //     )
        const handleDisplay = () => {
            let book = [];
            for (const bookData of tempSearchResults) {
                Object.keys(bookData).filter((index) => {
                    if(typeof bookData[index].title !== 'undefined'){
                        book.push(bookData[index])
                        return bookData[index].title.toLowerCase().includes(searchText.toLowerCase())
                    }
                    return null;
                })
            }
            return book
        }

        // const showSearchResult = () => {
        //     if (searchText === '') {
        //         return []
        //     } else  {
        //         try {
        //             const mappedBook = tempSearchResults.map((e, i) => (e[i]))

        //             const filteredBook = mappedBook.filter((book) => {
        //                 if ((typeof book.title !== 'undefined') && (typeof book.authors !== 'undefined') && (typeof book.imageLinks !== 'undefined')) {
        //                     return book.title.toLowerCase().includes(searchText.toLowerCase())
        //                 }
        //                 return null
        //             })

        //             return filteredBook
        //         } catch (error) {
        //             console.log('Error', error)
        //         }
        //     }
        // }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            defaultValue={searchText}
                            onChange={(event) => this.handleOnChange(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            searchText.length > 0 ? handleDisplay().map((result, index) =>
                                <li key={index} >
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover"
                                                style={{ width: 128, height: 174, backgroundImage: `url(${result.imageLinks ? result.imageLinks.thumbnail : ''})` }}></div>
                                            <div className="book-shelf-changer">
                                                <BookOptions />
                                            </div>
                                        </div>
                                        <div className="book-title">{result.title ? result.title : ''}</div>
                                        <div className="book-authors">{result.authors ? result.authors : ''}</div>
                                    </div>
                                </li>
                            ) : null
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;
