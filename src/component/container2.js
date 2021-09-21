import React, { Component } from "react";
import Moon from "./moon";
import Particle2 from "./particle2";
import { Link } from "react-router-dom";
export default class container2 extends Component {
  render() {
    return (
      <div>
        <div className="container2">
          <Particle2 />
          <Moon />
        </div>
      </div>
    );
  }
}
