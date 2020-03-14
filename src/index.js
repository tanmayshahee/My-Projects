import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
