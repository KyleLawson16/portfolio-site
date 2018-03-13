import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Thumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = { active: null };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.props.handleSelect(this.props.title, this.props.src, this.props.imageSrc);
  }

  render() {
    if (this.props.active == this.props.title) {
    return (
      <div
        onClick={this.handleSelect}
        style={{ backgroundColor: 'transparent',}}
      >
        <h1 className="thumbnail-title thumbnail-active">{this.props.title}</h1>
      </div>
    )
    }
    else {
      return (
        <div
          onClick={this.handleSelect}
          style={{ backgroundColor: 'transparent',}}
        >
          <h1 className="thumbnail-title">{this.props.title}</h1>
        </div>
      )

    }
  }
}

export default Thumbnail;
