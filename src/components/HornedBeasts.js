import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likesInt: 0,
    };
  }
  addLikes = () => {
    this.setState({
      likesInt: this.state.likesInt + 1,
    });
  };

  showModal = () => {
    this.props.opening(this.props.title);
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src={this.props.imgSrc} /> */}
          <Button onClick={this.addLikes}>
            <img
              src={this.props.imgSrc}
              alt={this.props.title}
              title="animal image"
              width="100%"
              height="100%"
            />{" "}
          </Button>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <br />
              Description:{this.props.description} Favourites ( Press on the
              Image to Add as a Favourite): {this.state.likesInt}❤️
            </Card.Text>
            <Button onClick={this.showModal} id={this.props.title}>
              {" "}
              Show Beast Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeasts;
