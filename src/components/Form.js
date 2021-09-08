import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <select
            onChange={(e) => {
              this.props.handleHorns(e);
            }}
          >
            <option value="1"> Filter By # of Horns (High to Low) </option>
            <option value="2"> Filter By # of Horns (Low to High) </option>
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
