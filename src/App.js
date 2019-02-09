import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/Page/homepage';
import SearchPage from './components/Page/searchpage';

import './App.css'
import './index.css'



class BooksApp extends React.Component {


  

    render(){

      return ( <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/search" component={SearchPage}/>
            </div>

      );

    }



} 







  
  
export default BooksApp 

/* References used:https://reacttraining.com/react-router/web/api/Route
Udacity Classroom: Bulding With React */

