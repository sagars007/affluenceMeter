import "./App.css";
import Landing from "./component/landing";
import gsap from "gsap";
import React, { Component } from "react";

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
        <section className="landing">
          <Landing />
        </section>

        <div className="intro">
          <div className="introText">
            <div className="hide">
              <span className="text">Innovating spirits are </span>
            </div>
            <div className="hide">
              <span className="text">supposed to be</span>
            </div>
            <div className="hide">
              <span className="text">kendered</span>
            </div>
          </div>
        </div>
        <div className="slider"></div>
      </div>
    );
  }
}
