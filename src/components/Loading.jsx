import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

class Loading extends Component {
  render() {
    return (
      <div style={ {
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
      } }>
        <Spinner animation="grow" variant="primary" />
      </div>
    );
  }
}

export default Loading;
