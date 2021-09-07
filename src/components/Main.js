import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
// import moose from '../images/moose.jpg'
// import rhino from '../images/rhino.jpg'
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
// import SelectedBeast from "./SelectedBeast";

class Main extends Component {
  render() {
    // let beasts = require("./data.json");
    return (
      <>
        {data.map((elem) => {
          return (
            <>
              <HornedBeasts
                opening={this.props.opening}
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
