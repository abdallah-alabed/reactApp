import React, { Component } from "react";

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
      <div>
        <h2> title : {this.props.title} </h2>
        <button onClick={this.addLikes} id={this.props.title}>
          {" "}
          <img
            src={this.props.imgSrc}
            alt={this.props.title}
            title={this.props.title}
            width="300px"
            height="300px"
          />{" "}
        </button>
        <p> description : {this.props.description} </p>
        <p>
          {" "}
          Favourites (Press on the Image to Add as a Favourite):{" "}
          {this.state.likesInt}❤️
        </p>
        <button onClick={this.showModal} id={this.props.title}>
          {" "}
          Show Beast Details
        </button>
      </div>
    );
  }
}

export default HornedBeasts;
