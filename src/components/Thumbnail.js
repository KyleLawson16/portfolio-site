import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Thumbnail extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.props.handleSelect(this.props.title, this.props.image, this.props.gif, this.props.link);
  }

  render() {
    return (
      <div
        onClick={this.handleSelect}
      >
        <h1 className="thumbnail-title">{this.props.title}</h1>
      </div>
    )
  }
}

export default Thumbnail;
