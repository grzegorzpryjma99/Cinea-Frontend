import React, { Component } from "react";

class Film extends Component{


  render() {
    return (
    <div>
        <p>----------------</p>
        <p>{this.props.info.id}</p>
        <p>{this.props.info.title}</p>
        <p>----------------</p>
    </div>
    );
  }
}

export default Film;

