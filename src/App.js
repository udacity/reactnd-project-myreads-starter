import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ShelfTab from './components/ShelfTab';
import * as BooksAPI from './BooksAPI';



function TabContainer(props) {
    return (
        <Typography {...props} component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.prototype = {
    children: PropTypes.node.isRequired,
};

class BookApp extends React.Component {

    state = {
        currentTab: 0,
        books: [],
        isLoaded: false,
        shelves: [
            { label: "Want To Read", id: "wantToRead", books: [] },
            { label: "Currently Reading", id: "urrentlyReading", books: [] },
            { label: "Read", id: "read", books: [] }
        ]
    }

    handleTabChanged = (event, position) => {
        this.setState({ currentTab: position });
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(async books => {
                await this.setState(() => {
                    return ({ books: books, isLoaded: true })
                })
                for (const shelf of this.state.shelves) {
                    this.filterIntoShelf(shelf.id);
                }
            })
    }

    filterIntoShelf = (shelfId) => {
        const books = this.state.books.filter(s => (s.shelf === shelfId));
        const shelves = this.state.shelves.map(shelf => (shelf.id === shelfId ? { ...shelf, books: books } : shelf));
        this.setState({ shelves: shelves })
    }

    render() {
        const { currentTab, shelves, isLoaded } = this.state;
        return (
            <div className="app">
                <AppBar position="static" color="default">
                    <Tabs
                        value={currentTab}
                        onChange={this.handleTabChanged}
                        centered={true}
                        indicatorColor="primary"
                        variant="fullWidth"
                    >
                        {shelves.map(shelf => (
                            <Tab
                                key={shelf.id}
                                label={shelf.label}
                                to={"/" + shelf.label.replace(" ", "").toLowerCase()}
                            />
                        ))}
                    </Tabs>
                </AppBar>
                <div className="list-books-content">
                    <div>
                        {[0, 1, 2].map(index => (

                            currentTab === index &&
                            <TabContainer key={index}>
                                <ShelfTab
                                    key={"shelf_" + shelves[index].id}
                                    books={shelves[index].books}
                                    shelf={shelves[index]}
                                    isLoaded={isLoaded} />
                            </TabContainer>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default BookApp;