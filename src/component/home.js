import React, { Component } from "react";
import Intro from "./Intro";
import Landing from "./landing";
import gsap from "gsap";
export default class home extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ default: { ease: "power1.out" } });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 0.25, delay: 0.7 });
    tl.to(".intro", { y: "-100%", duration: 0.5 }, "-=0.4")
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
  }
  render() {
    console.log("Home");
    return (
      <div>
        <section className="landing">
          <Landing />
        </section>

        <Intro />
      </div>
    );
  }
}
