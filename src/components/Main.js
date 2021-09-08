import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
// import moose from '../images/moose.jpg'
// import rhino from '../images/rhino.jpg'
// import data from "./data.json";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SelectedBeast from "./SelectedBeast";
import { Row, Col, Container } from "react-bootstrap";

class Main extends Component {
  render() {
    // let beasts = require("./data.json");
    console.log(this.props.data);
    return (
      <Container>
        <Row>
          <>
            {this.props.data.map((elem) => {
              return (
                <Col xs={4}>
                  <HornedBeasts
                    opening={this.props.opening}
                    title={elem.title}
                    description={elem.description}
                    imgSrc={elem.image_url}
                  />
                </Col>
              );
            })}
          </>
        </Row>
      </Container>
    );
  }
}

export default Main;
