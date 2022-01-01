import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages

import BioCV from "views/BioCV.js";
import Gallery from "views/Gallery.js";
import Project from "views/Projects";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Gallery {...props} />} />
      <Route path="/about" render={(props) => <BioCV {...props} />} />
      <Route path="/gallery" render={(props) => <Gallery {...props} />} />
      <Route path="/project/:id" render={(props) => <Project {...props} />} />
      <Redirect to="/gallery" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
