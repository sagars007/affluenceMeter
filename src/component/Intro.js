import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div>
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
