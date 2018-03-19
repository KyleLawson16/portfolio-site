import React, { Component } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = { active: null };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.props.handleSelect(this.props.index);
  }

  render() {
    if (this.props.active) {
    return (
      <div
        onClick={this.handleSelect}
        style={{ backgroundColor: 'transparent',}}
      >
        <h1 className="thumbnail__title thumbnail__title--active">{this.props.title}</h1>
      </div>
    )
    }
    else {
      return (
        <div
          onClick={this.handleSelect}
          style={{ backgroundColor: 'transparent',}}
        >
          <h1 className="thumbnail__title">{this.props.title}</h1>
        </div>
      )

    }
  }
}

export default Thumbnail;
