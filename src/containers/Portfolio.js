import React, { Component } from 'react';
import { Layout, Footer, Row, Col } from 'antd';
import windowSize from 'react-window-size';
import _ from 'lodash';

import Background from "../assets/images/background.png";
import ProjectBoard from '../assets/images/project_board.jpg';
import Name from '../assets/images/name.png';

import Jumbotron from '../components/Jumbotron';
import Thumbnail from '../components/Thumbnail';
import SocialIcons from '../components/social_icons';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jumbotronTitle: "Vidvision",
      jumbotronSrc: "https://www.getvidvision.com/",
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  renderSocialIcons() {
    const icons = [
      {name: 'github', url: 'https://github.com/KyleLawson16/'},
      {name: 'linkedin', url: 'https://www.linkedin.com/in/kylejlawson/'},
      {name: 'twitter', url: 'https://twitter.com/KyleLaws0n'},
      {name: 'facebook', url: 'https://www.facebook.com/kyle.lawson.77'},
    ];

    return _.map(icons, icon => {
      return (
        <SocialIcons
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
          key={icon.name}
          url={icon.url}
          color="A4A4A4"
          hovColor="#000"
          width={40}
          height={40}
          marginRight={10}
        />
      );
    });
  }

  handleSelect(title, src) {
    this.setState({
      jumbotronTitle: title,
      jumbotronSrc: src,
    });
  }

  render() {
    return (
      <div>
      <div
        style={{
          width: '100%',
          height: (0.21 * this.props.windowHeight),
          marginTop: '-3vh'
        }}
      >
        <img
          style={{
            paddingTop: (20000 / this.props.windowWidth) + (20000 / this.props.windowWidth) + 15
          }}
          className="main-heading"
          src={Name}
        />
      </div>
      <Layout
        style={{
          minHeight: (this.props.windowHeight - (0.21 * this.props.windowHeight)),
          backgroundColor: 'white',
        }}
      >
        <div>
          <img src={Background} style={{ width: '100%', position: 'relative' }} />
        </div>
        <div
          className="project-board"
          style={{ top: (0.16 * this.props.windowHeight) + (this.props.windowWidth / 50) }}
        >
          <img
            src={ProjectBoard}
            style={{ width: '100%' }}
          />
          <div className="project-board-text">
            <h1 className="thumbnail-title project-header">My Projects</h1>
            <Thumbnail
              title="Vidvision"
              src="https://www.getvidvision.com/"
              handleSelect={this.handleSelect}
              active={this.state.jumbotronTitle}
            />
            <Thumbnail
              title="Melillo Equities"
              src="https://melillo-equities-dev-builtbykingwilllycom.netlify.com/"
              handleSelect={this.handleSelect}
              active={this.state.jumbotronTitle}
            />
            <Thumbnail
              title="Pureworld Hemp"
              src="https://pure-world-staging.herokuapp.com/"
              handleSelect={this.handleSelect}
              active={this.state.jumbotronTitle}
            />
            <h1 className="thumbnail-title project-click">"click me"</h1>
          </div>
        </div>

        <div className="jumbotron">
          <iframe
            style={{
              position: 'absolute',
              width: (0.359 * this.props.windowWidth) * 1 / .45,
              left: (0.3085 * this.props.windowWidth),
              top: (0.18 * this.props.windowHeight) + (this.props.windowWidth / 50),
              height: (0.359 * this.props.windowWidth) * 0.585 * 1 / .45
            }}
            className="frame"
            src={this.state.jumbotronSrc}
            frameborder="0">
          </iframe>
        </div>

        <Row justify="space-around" align="middle" style={{ marginBottom: 10, marginTop: '-5vw' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            {this.renderSocialIcons()}
          </Col>
        </Row>
      </Layout>

      </div>
    )
  }
}

export default windowSize(Portfolio);
