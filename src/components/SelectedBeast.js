"use strict";
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class SelectedBeast extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showInfo} onHide={this.props.closing}>
          <Modal.Header closeButton>
            <Modal.Title> {this.props.beastInfo.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            {this.props.beastInfo.description}
            <img
              src={this.props.beastInfo.image_url}
              width="470px"
              height="400px"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closing}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
