import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast";
import HornedBeasts from "./components/HornedBeasts";
import data from "./components/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:data,
      showInfo: false,
      selectedBeast:{}
    };
  }
  closing = () => {
    this.setState({
      showInfo: false,
    });
  };
  opening = (title) => {
    let results=data.find(animal=>{
      if (animal.title===title){
        return animal;
      }
    });
    this.setState({
      showInfo: true,
      selectedBeast: results
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Main opening={this.opening} />
        <SelectedBeast
          closing={this.closing}
          showInfo={this.state.showInfo}
          beastInfo={this.state.selectedBeast}
        />
        <HornedBeasts opening={this.opening} />
        <Footer />
      </div>
    );
  }
}

export default App;
