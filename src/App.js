// React Required
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeParticles from "./home/HomeParticles.jsx";
import Error404 from "./elements/error404";

import "./index.scss";

function App() {
  return (
    <Router basename='/'>
      {/* <HomeParticles /> */}
      <Switch>
        <Route exact path='/' component={HomeParticles} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
