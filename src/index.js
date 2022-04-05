import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'
import { get, getAll, update, search } from "./BooksAPI";

ReactDOM.render(
    <BrowserRouter>
        <App
            {...{
                get,
                getAll,
                update,
                search,
            }}
        />
    </BrowserRouter>,
    document.getElementById('root'));
