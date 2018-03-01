import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import HeaderComponent from "./components/Header";
import {Link, Route} from "react-router-dom";
import {Button, Tabs} from "antd";
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import Read from "./components/Read";

const operations = <Button>Extra Action</Button>;
const TabPane = Tabs.TabPane;

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
        showSearchPage: false
    };

    render() {
        return (
            <div className="app">
                <Route path="/search" exact render={() => (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <Link className="close-search" to="/">Close</Link>
                            <div className="search-books-input-wrapper">
                                {}
                                <input type="text" placeholder="Search by title or author"/>

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                )}/>
                <HeaderComponent/>
                <Tabs tabBarExtraContent={operations} type="card">
                    <TabPane tab="Currently Reading" key="1">
                        <CurrentlyReading/>
                    </TabPane>
                    <TabPane tab="Want to Read" key="2">
                        <WantToRead/>
                    </TabPane>
                    <TabPane tab="Read" key="3">
                        <Read/>
                    </TabPane>
                    <TabPane tab="Ratings" key="4">Ratings</TabPane>
                </Tabs>
                <div className="list-books">
                    <div className="list-books-content">
                        <div>

                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default BooksApp
