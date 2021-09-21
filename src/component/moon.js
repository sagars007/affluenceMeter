import React, { Component } from "react";
import mount from "../component/images/mount1.png";

export default class Moon extends Component {
  render() {
    return (
      <div className="mount1">
        <div className="btnMount">
          <button>Know More About Our Buisness Model</button>
        </div>
        <img src={mount} />
      </div>
    );
  }
}
