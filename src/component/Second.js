import React, { Component } from "react";
import gsap from "gsap";
import Conatiner from "./container1";
import { Header } from "./styles/app.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { IconCont } from "../component/styles/education.styles";

export default class Second extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ default: { ease: "power2.out" } });
    tl.fromTo(".secondLarge", { opacity: 0 }, { opacity: 1, duration: 2 });
    tl.fromTo(".lrgTXt2", { opacity: 0 }, { opacity: 1, duration: 1 });
  }
  render() {
    return (
      <div className="newdiv1">
        <div className="secondLarge">
          <Header>
            {" "}
            <Link to="/">
              {" "}
              <IconCont>
                <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  style={{ fontSize: "40px", color: "#3f51b5" }}
                />
              </IconCont>
            </Link>
            {this.props.title}
          </Header>
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
