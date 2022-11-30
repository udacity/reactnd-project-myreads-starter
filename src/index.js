import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  // With the BrowserRouter, We will be able to use all the elements that comes with the react-router-dom npm module
  <BrowserRouter> 
    <App />
  </BrowserRouter>, document.getElementById('root'))
 