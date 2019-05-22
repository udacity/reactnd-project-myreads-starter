import React from 'react';
import PropTypes from 'prop-types';
import ShelfTab from './components/ShelfTab';
import * as BooksAPI from './BooksAPI';
import AppTabs from './components/AppTabs'
import SwipeableView from 'react-swipeable-views';
import { Typography, Zoom, Fab } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import SearchBar from 'material-ui-search-bar'
import BookCard from './components/BookCard';

const shelves = [
    { label: "Want To Read", id: "wantToRead" },
    { label: "Currently Reading", id: "currentlyReading" },
    { label: "Read", id: "read" }
]

function TabContainer(props) {
    return (
        <Typography {...props} dir={props.dir} component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

function FabSearch(props) {
    const { isShown, onClick } = props;
    return (<Zoom
        key="primary"
        in={isShown}
        unmountOnExit
    >
        <Fab
            style={{
                position: 'sticky',
                bottom: 16 * 2,
                right: 16 * 2
            }}
            color="primary"
            onClick={onClick}
        >
            <SearchIcon />
        </Fab>
    </Zoom>
    )
}

TabContainer.prototype = {
    children: PropTypes.node.isRequired,
};

class BookApp extends React.Component {

    state = {
        currentTab: 0,
        books: [],
        isLoaded: false,
        showSearchPage: false,
        searchBooks: []
    }

    handleSearchFabClicker = () => {
        this.setState((prev) => ({ showSearchPage: !prev.showSearchPage }))
    }
    handleSearchCanceled = () => {
        this.setState(({ showSearchPage: false, searchBooks: [] }))
    }

    handleTabChanged = (event, position) => {
        this.setState({ currentTab: position });
    }

    handleIndexChanged = (position) => {
        this.setState({ currentTab: position });
    }

    handleShelfChanged = (book, shelfId) => {
        console.log(book, shelfId)
        BooksAPI.update(book, shelfId)
            .then(response => {
                //console.log
                //this.changeUpdateShelfResponse(response)
                this.setState((prev) => ({
                    books: [...prev.books, { ...book, shelf: shelfId }]
                }))
            })
    }

    handleOnSearch = (search, isDelayed) => {
        if (isDelayed) {
            setTimeout(function () {
                this.doQuery(search);
            }.bind(this), 600);
        } else {
            this.doQuery(search);
        }
    }

    doQuery = (search) => {

        BooksAPI.search(search)
            .then(newBooks => {
                if (Array.isArray(newBooks)) {
                    this.setState((prev) => ({
                        searchBooks:
                            prev.searchBooks.concat([...newBooks.filter(
                                n => !prev.searchBooks.map(b => b.id).join(" ").includes(n.id)
                            )])
                    }))
                } else {
                    //no record found
                }
            })
    }

    changeUpdateShelfResponse = (newShelves) => {
        let booksShelf = [];
        for (const s of shelves) {
            booksShelf = [
                ...booksShelf,
                ...(newShelves[s.id] && newShelves[s.id].length > 0 ?
                    newShelves[s.id].map(bId => ({ id: bId, shelf: s.id })) : [])
            ];
        }

        let out = this.state.books;
        for (const item of booksShelf) {
            out = out.map(b => (
                b.id === item.id & item.shelf !== "none" ?
                    { ...b, shelf: item.shelf } :
                    (item.shelf === "none" ? null : b)
            ))
        }

        this.setState({ books: out });
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => {
                this.setState(() => {
                    return ({ books: books, isLoaded: true })
                })
            })
    }

    filterIntoShelf = (shelfId) => this.state.books.filter(s => (s.shelf === shelfId));

    render() {
        const { currentTab, isLoaded, showSearchPage, searchBooks } = this.state;
        return (
            <div className="app">
                {!showSearchPage &&
                    < AppTabs
                        currentTab={currentTab}
                        handleTabChanged={this.handleTabChanged}
                        shelves={shelves}
                    />
                }
                {!showSearchPage &&
                    <SwipeableView
                        axis="x"
                        index={currentTab}
                        onChangeIndex={this.handleIndexChanged}
                        enableMouseEvents
                    >
                        {shelves.map((shelf, index) => {
                            if (currentTab === index) {
                                return (
                                    <TabContainer key={shelf.id}>
                                        <ShelfTab
                                            key={"shelf_" + shelf.id}
                                            books={this.filterIntoShelf(shelf.id)}
                                            shelf={shelf}
                                            isLoaded={isLoaded}
                                            onShelfChanged={this.handleShelfChanged} />
                                    </TabContainer>
                                )
                            } else { return <label key={"label" + shelf.id}>Invalid Index</label> }
                        })}
                    </SwipeableView>
                }
                <FabSearch isShown={!showSearchPage} onClick={this.handleSearchFabClicker} />
                {showSearchPage &&
                    <SearchBar
                        onChange={(value) => this.handleOnSearch(value, true)}
                        onRequestSearch={(value) => this.handleOnSearch(value, false)}
                        style={{
                            margin: '0 auto',
                            maxWidth: 800
                        }}
                        cancelOnEscape={true}
                        onCancelSearch={this.handleSearchCanceled}
                    />
                }

                {(showSearchPage && searchBooks) &&
                    searchBooks.map(book => (
                        <BookCard
                            key={"book_" + book.id} book={book}
                            onShelfChanged={this.handleShelfChanged}
                        />
                    ))

                }
            </div>
        );
    }
}

export default BookApp;