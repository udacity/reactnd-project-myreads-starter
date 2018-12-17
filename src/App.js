import React from 'react'
import './App.css'
import Search from './Search'
import { Route } from "react-router-dom";
import MainPage from './MainPage'

class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={MainPage} />
                <Route exact path="/search" component={Search} />
            </div>
        )
    }
}

export default BooksApp