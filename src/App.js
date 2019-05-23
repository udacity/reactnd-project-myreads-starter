import React from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBook from './components/SearchBook';
import FabSearch from './components/FabSearch';
import TabBook from './components/TabBook';
import AppTabs from './components/AppTabs';
import { Route } from 'react-router-dom'

const shelves = [
    { label: "Want To Read", id: "wantToRead" },
    { label: "Currently Reading", id: "currentlyReading" },
    { label: "Read", id: "read" }
]


class BookApp extends React.Component {

    state = {
        currentTab: 0,
        books: [],
        isLoaded: false
    }

    handleTabChanged = (event, position) => {
        this.setState({ currentTab: position });
    }

    handleIndexChanged = (position) => {
        this.setState({ currentTab: position });
    }

    handleShelfChanged = (book, shelfId) => {
        BooksAPI.update(book, shelfId)
            .then(response => {
                //console.log
                //this.changeUpdateShelfResponse(response)
                this.setState((prev) => ({
                    books: [...prev.books, { ...book, shelf: shelfId }]
                }))
            })
    }


    componentDidMount() {
        BooksAPI.getAll()
            .then(books => {
                this.setState(() => {
                    return ({ books: books, isLoaded: true })
                })
            })
    }

    render() {
        const { currentTab, isLoaded, books } = this.state;
        return (
            <div >
                <Route exact path="/" render={() => (
                    <div>
                        < AppTabs
                            currentTab={currentTab}
                            handleTabChanged={this.handleTabChanged}
                            shelves={shelves}
                        />
                        <TabBook
                            handleIndexChanged={this.handleIndexChanged}
                            handleShelfChanged={this.handleShelfChanged}
                            currentTab={currentTab}
                            shelves={shelves}
                            isLoaded={isLoaded}
                            books={books} />
                        <FabSearch isShown={true} href="/search" />
                    </div>
                )}
                />
                <Route exact path="/search" render={() => (
                    <SearchBook
                        // handleOnSearch={this.handleOnSearch}
                        books={books}
                        shelves={shelves}
                        onShelfChanged={this.handleShelfChanged}
                    />
                )}
                />

            </div>
        );
    }
}

export default BookApp;



    // changeUpdateShelfResponse = (newShelves) => {
    //     let booksShelf = [];
    //     for (const s of shelves) {
    //         booksShelf = [
    //             ...booksShelf,
    //             ...(newShelves[s.id] && newShelves[s.id].length > 0 ?
    //                 newShelves[s.id].map(bId => ({ id: bId, shelf: s.id })) : [])
    //         ];
    //     }

    //     let out = this.state.books;
    //     for (const item of booksShelf) {
    //         out = out.map(b => (
    //             b.id === item.id & item.shelf !== "none" ?
    //                 { ...b, shelf: item.shelf } :
    //                 (item.shelf === "none" ? null : b)
    //         ))
    //     }

    //     this.setState({ books: out });
    // }