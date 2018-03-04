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

const operations = <Link to="/search"><Button type="primary" shape="circle" icon="plus"/></Link>;
const TabPane = Tabs.TabPane;
const {Content} = Layout;

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {

        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    

    render() {

        console.log("oi", this.state.books);
        return (
            <div className="app">
                <HeaderComponent/>
                <Route path="/search" exact render={() => (
                    <Search books={this.state.books}/>
                )}/>
                <Route path="/" exact render={() => (
                    <Layout style={{margin: '24px 16px 0', marginTop: '20px'}}>
                        <Content>
                            <Tabs tabBarExtraContent={operations} type="card">
                                <TabPane tab="Currently Reading" key="1">
                                    <CurrentlyReading books={this.state.books}/>
                                </TabPane>
                                <TabPane tab="Want to Read" key="2">
                                    <WantToRead books={this.state.books}/>
                                </TabPane>
                                <TabPane tab="Read" key="3">
                                    <Read books={this.state.books}/>
                                </TabPane>
                            </Tabs>
                        </Content>
                    </Layout>
                )}/>
            </div>
        )
    }
}

export default BooksApp
