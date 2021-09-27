import React, { Component } from "react";
import gsap from "gsap";
import Conatiner from "./container1";

export default class Second extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ default: { ease: "power2.out" } });
    tl.fromTo(".secondLarge", { opacity: 0 }, { opacity: 1, duration: 2 });
    tl.fromTo(".lrgTXt2", { opacity: 0 }, { opacity: 1, duration: 1 });
  }
  render() {
    console.log("Second");
    return (
      <div className="newdiv1">
        <div className="secondLarge">
          <div className="lrgTXt2">
            {/* <div>Explore Cutting Edge Tech </div> */}
            <div>Get Accurate </div>
            <div>Affluence Rating </div>
          </div>
        </div>
        <div className="portContainer">
          <Conatiner />
        </div>
      </div>
    );
  }
}
