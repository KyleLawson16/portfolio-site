import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class SocialIcons extends Component {
  constructor(props) {
    super(props)
    this.hoverSocial = this.hoverSocial.bind(this);
    this.noHoverSocial = this.noHoverSocial.bind(this);

    this.state = {
      social_color: this.props.color,
    }
  }

  hoverSocial() {
    this.setState({
      social_color: this.props.hovColor
    })
  }

  noHoverSocial() {
    this.setState({
      social_color: this.props.color
    })
  }

  render() {
    if (this.props.name == "mail") {
      return (
        <SocialIcon
          url={this.props.url}
          className="social-icons"
          color={this.state.social_color}
          style={{ width: this.props.width, height: this.props.height, marginRight: this.props.marginRight }}
          onMouseEnter={this.hoverSocial}
          onMouseLeave={this.noHoverSocial}
          network="email" />
      )
    }
    else {
      return (
        <SocialIcon
          url={this.props.url}
          className="social-icons"
          color={this.state.social_color}
          style={{ width: this.props.width, height: this.props.height, marginRight: this.props.marginRight }}
          onMouseEnter={this.hoverSocial}
          onMouseLeave={this.noHoverSocial} />
      );
    }

  }
}

export default SocialIcons;
