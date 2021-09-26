import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./component/home";
import Second from "./component/Second";
import DomainConatiner1 from "./component/DomainConatiner1";
import EmpIndex from "./component/EmploymentDomain/EmpIndex";
import Mod3Index from "./component/Module 3/Mod3index";
export default function App() {
  console.log("app");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/knowMore" component={Second} />
          <Route exact path="/domain1" component={DomainConatiner1} />
          <Route exact path="/domain2" component={EmpIndex} />
          <Route exact path="/domain3" component={Mod3Index} />
        </Switch>
      </Router>
    </div>
  );
}
