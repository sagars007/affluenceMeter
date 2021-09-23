import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, DomainHeader } from "../styles/app.styles";
import { IconCont } from "../styles/education.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
export default class PageHeader extends Component {
  render() {
    return (
      // <PageHeader title={}></PageHeader>
      <div>
        <Header>
          {" "}
          <Link to="/knowMore">
            {" "}
            <IconCont>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </IconCont>
          </Link>
          {this.props.title}
        </Header>
        <DomainHeader>Ananlytics and Much More</DomainHeader>
      </div>
    );
  }
}
