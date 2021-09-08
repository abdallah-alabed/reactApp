import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./components/SelectedBeast";
// import HornedBeasts from "./components/HornedBeasts";
import data from "./components/data.json";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showInfo: false,
      selectedBeast: {},
      showUser: false,
    };
  }

  handleHorns = (e) => {
    let filtered = e.target.value;

    this.setState({
      filtered: filtered,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.filtered === "1") {
      this.setState({
        showUser: true,
        data: data.sort((a, b) => {
          return b.horns - a.horns;
        }),
      });
    }
    if (this.state.filtered === "2") {
      this.setState({
        showUser: true,
        data: data.sort((a, b) => {
          return a.horns - b.horns;
        }),
      });
    }
  };

  closing = () => {
    this.setState({
      showInfo: false,
    });
  };
  opening = (title) => {
    let results = data.find((animal) => {
      if (animal.title === title) {
        return animal;
      }
    });
    this.setState({
      showInfo: true,
      selectedBeast: results,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <br></br>
        <Form handleSubmit={this.handleSubmit} handleHorns={this.handleHorns} />
        <br></br>
        <Main opening={this.opening} data={this.state.data} />
        <br></br>
        {this.state.showUser} ?
        <SelectedBeast
          closing={this.closing}
          showInfo={this.state.showInfo}
          beastInfo={this.state.selectedBeast}
        />
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default App;
