import React, { Component } from "react";
import Intro from "./Intro";
import Landing from "./landing";

export default class home extends Component {
  render() {
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
