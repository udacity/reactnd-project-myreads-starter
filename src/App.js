import React from 'react'
import {Layout} from 'antd';
import './App.css'
import * as BooksAPI from './BooksAPI'
import HeaderComponent from "./components/Header";
import {Link, Route} from "react-router-dom";
import {Button, Tabs} from "antd";
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import Read from "./components/Read";
import Search from "./components/Search";
import OurSelection from "./components/OurSelection";

const operations = <Link to="/search"><Button type="primary" shape="circle" icon="plus"/></Link>;
const TabPane = Tabs.TabPane;
const {Content} = Layout;

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
        currentlyReading: [],
        wantToRead: [],
        readBook: []

    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {

            this.setState(books);
            const wantToRead = books.filter((c) => c.shelf === 'wantToRead');
            const currentlyReading = books.filter((c) => c.shelf === 'currentlyReading');
            const read = books.filter((c) => c.shelf === 'read');

            console.log(wantToRead, "want")
            this.setState(({
                wantToRead: wantToRead,
                readBook: read,
                currentlyReading: currentlyReading
            }));
        });

    }

    render() {
        return (
            <div className="app">
                <HeaderComponent/>
                <Route path="/search" exact render={() => (
                    <Search/>
                )}/>
                <Route path="/" exact render={() => (
                    <Layout style={{margin: '24px 16px 0', marginTop: '20px'}}>
                        <Content>
                            <Tabs tabBarExtraContent={operations} type="card">
                                <TabPane tab="Currently Reading" key="2">
                                    <CurrentlyReading  currentlyReading={this.props.currentlyReading}/>
                                </TabPane>
                                <TabPane tab="Want to Read" key="3">
                                    <WantToRead wantToRead={this.props.wantToRead}/>
                                </TabPane>
                                <TabPane tab="Read" key="4">
                                    <Read  readBook={this.props.readBook}/>
                                </TabPane>
                                <TabPane tab="Ratings" key="5">Ratings</TabPane>
                            </Tabs>

                        </Content>
                    </Layout>
                )}/>
                <div className="open-search">

                </div>

            </div>
        )
    }
}

export default BooksApp
