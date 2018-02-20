import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div>
      <a href={this.props.link} target="__blank">
        <img
          src={this.props.image}
          className="jumbo-image"
          style={{
            position: 'absolute',
            width: this.props.width,
            left: this.props.left,
            top: this.props.top
          }}
        />
      </a>
      </div>
    )
  }
}

export default Jumbotron;
