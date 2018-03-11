import React, { Component } from 'react';
import { Layout, Footer, Row, Col } from 'antd';
import windowSize from 'react-window-size';
import _ from 'lodash';

import Background from "../assets/images/background.png";
import ProjectBoard from '../assets/images/board-2.png';
import Name from '../assets/images/name.png';

import Jumbotron from '../components/Jumbotron';
import Thumbnail from '../components/Thumbnail';
import SocialIcons from '../components/social_icons';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jumbotronTitle: "LOU Assistant",
      jumbotronSrc: "https://www.louassistant.com/",
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  renderSocialIcons() {
    const icons = [
      {name: 'mail', url: 'mailto:kyle@kylelawson.io'},
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
          name={icon.name}
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
      <div
        className="project-board"
        style={{ top: (0.15 * this.props.windowHeight) + (this.props.windowWidth / 50) }}
      >
        <img
          src={ProjectBoard}
          style={{ width: '100%', height: '100%' }}
        />
        <div className="project-board-text">
          <h1 className="thumbnail-title project-header">My Projects</h1>
          <Thumbnail
            title="LOU Assistant"
            src="https://www.louassistant.com/"
            handleSelect={this.handleSelect}
            active={this.state.jumbotronTitle}
          />
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
        <div>
          <img src={Background} className="desk-photo" />


        </div>

        <div className="jumbotron">
          {this.props.windowWidth > 1000
          ?
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
          :
          <iframe
            style={{
              position: 'absolute',
              width: (0.72 * this.props.windowWidth) * 1 / .45,
              left: (0.146 * this.props.windowWidth),
              top: (0.183 * this.props.windowHeight) + ((this.props.windowWidth + 700 - this.props.windowWidth) / 30) + (.47 * this.props.windowWidth),
              height: (0.359 * this.props.windowWidth) * 1.17 * 1 / .45
            }}
            className="frame"
            src={this.state.jumbotronSrc}
            frameborder="0">
          </iframe>
          }
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
