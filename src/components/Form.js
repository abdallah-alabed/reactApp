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
            <option value="1"> Filter By # of Horns (High to low) </option>
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
