import React, { Component } from 'react';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 0 };
  }
  componentWillReceiveProps(nextProps) {
    return (
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
        <img
          src={this.props.gif}
          onLoad={this.imageLoadHandler.bind(this)}
          className="jumbo-image"
          style={{
            position: 'absolute',
            width: this.props.width,
            left: this.props.left,
            top: this.props.top,
            opacity: this.state.opacity,
          }}
        />
      </a>
    )
  }
  imageLoadHandler() {
    console.log('loaded');
    this.setState({ opacity: 1 });
  }
  render() {
    return (
      <div>
        {this.componentWillReceiveProps()}
      </div>
    )
  }
}

export default Jumbotron;
