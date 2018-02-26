import React, { Component } from 'react';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <iframe className="jumbo-image" style={{
          position: 'absolute',
          width: (0.359 * this.props.windowWidth),
          left: (0.3085 * this.props.windowWidth),
          top: (0.18 * this.props.windowHeight) + (this.props.windowWidth / 50)
        }} src="http://melillo-equities-dev-builtbykingwilllycom.netlify.com/" ></iframe>
      </div>
    )
  }
}

export default Jumbotron;
