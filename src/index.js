import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import FooComponent from "./FooComponent";

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root'));
