import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./index.css";
import Search from "./search/Search";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/search" component={Search} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
