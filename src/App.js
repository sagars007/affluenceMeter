import "./App.css";
import gsap from "gsap";
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
export default class App extends Component {
  constructor() {
    super();
  }
  //
  componentDidMount() {
    const tl = gsap.timeline({ default: { ease: "power1.out" } });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 2, delay: 1 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=0.4")
      .to(".first", {
        x: "-100%",
        duration: 1.5,
        ease: "power2.out",
      })
      .to(
        ".second",
        {
          x: "-100%",
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      )
      .to(
        ".third",
        {
          x: "-100%",
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1"
      );
    tl.fromTo(".bigText", { opacity: 0 }, { opacity: 1, duration: 1 });

    //Three code

    //Canvas
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/knowMore" component={Second} />
          </Switch>
        </Router>
      </div>
    );
  }
}
