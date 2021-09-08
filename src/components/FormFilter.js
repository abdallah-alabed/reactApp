import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class FormFilter extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Label>Filter Content</Form.Label>
          <Form.Select
            onChange={(e) => {
              this.props.handleHorns(e);
            }}
            size="lg"
          >
            <option value="0">Filter By:</option>
            <option value="1"> Filter By # of Horns (High to Low) </option>
            <option value="2"> Filter By # of Horns (Low to High) </option>
          </Form.Select>
          <Button variant="primary" type="submit" >
            Filter
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormFilter;
