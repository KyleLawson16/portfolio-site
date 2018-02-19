import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image}
          style={{
            position: 'absolute',
            width: this.props.width,
            left: this.props.left,
            top: this.props.top
          }}
        />
      </div>
    )
  }
}

export default Jumbotron;