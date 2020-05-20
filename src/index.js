// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

// Common Layout
// import Layout from "./component/common/App";

import HomeParticles from "./home/HomeParticles.jsx";

import Error404 from "./elements/error404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <HomeParticles />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/404`}>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
