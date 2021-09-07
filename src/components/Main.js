import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
// import moose from '../images/moose.jpg'
// import rhino from '../images/rhino.jpg'

class Main extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         stateLikes: this.props.likesInt,
  //     }
  // }
  // addLikes = () => {
  //     this.setState({
  //         likesInt: this.state.stateLikes + 1
  //     })
  // }

  render() {
    let beasts = require("./data.json");
    return (
      <>
        {beasts.map((elem) => {
          return (
            <>
              <HornedBeasts
                title={elem.title}
                description={elem.description}
                imgSrc={elem.image_url}
              />
            </>
          );
        })}
      </>
    );
  }
}

export default Main;
