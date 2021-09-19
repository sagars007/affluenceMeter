import React, { Component } from "react";
import gsap from "gsap";
export default class Second extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ default: { ease: "power2.out" } });
    tl.fromTo(".lrgTXt2", { opacity: 0 }, { opacity: 1, duration: 5 });
  }
  render() {
    return (
      <div>
        <div className="secondLarge">
          <div className="lrgTXt2">
            <div>Explore Cutting Edge Tech </div>
            <div>Get Accurate </div>
            <div>Affluence Rating </div>
          </div>
        </div>
      </div>
    );
  }
}
