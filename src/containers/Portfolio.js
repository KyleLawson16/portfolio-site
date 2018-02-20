import React, { Component } from 'react';
import { Layout, Footer, Row, Col } from 'antd';
import windowSize from 'react-window-size';
import _ from 'lodash';

import Background from "../assets/images/background.png";
import VidvisionGIF from '../assets/images/vidvision.gif';
import Vidvision from '../assets/images/vidvision.png';
import MelilloGIF from '../assets/images/melillo.gif';
import Melillo from '../assets/images/melillo.png';
import PureworldGIF from '../assets/images/pureworld.gif';
import Pureworld from '../assets/images/pureworld.png';

import Jumbotron from '../components/Jumbotron';
import Thumbnail from '../components/Thumbnail';
import SocialIcons from '../components/social_icons';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jumbotronImage: Vidvision,
      jumbotronGIF: VidvisionGIF,
      jumbotronTitle: "Vidvision",
      jumbotronLink: "https://www.getvidvision.com/",
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

  handleSelect(title, image, gif, link) {
    this.setState({
      jumbotronImage: image,
      jumbotronGIF: gif,
      jumbotronTitle: title,
      jumbotronLink: link,
    });
  }

  renderJumbotron() {
    return (
      <Jumbotron
        top={(0.18 * this.props.windowHeight) + (this.props.windowWidth / 50) }
        left={(0.3085 * this.props.windowWidth)}
        width={(0.359 * this.props.windowWidth)}
        image={this.state.jumbotronImage}
        gif={this.state.jumbotronGIF}
        title={this.state.jumbotronTitle}
        link={this.state.jumbotronLink}
      />
    )
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
        <h1
          style={{
            paddingTop: (20000 / this.props.windowWidth) + (20000 / this.props.windowWidth) - 30
          }}
          className="main-heading"
        >Kyle Lawson</h1>
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

        {this.renderJumbotron()}


        <Row
          className="thumbnail-row"
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Col span={2}>
          </Col>
          <Col span={5}>
            <Thumbnail
              title="Vidvision"
              image={Vidvision}
              gif={VidvisionGIF}
              link="https://www.getvidvision.com/"
              handleSelect={this.handleSelect}
            />
          </Col>
          <Col span={5}>
            <Thumbnail
              title="Melillo Equities"
              image={Melillo}
              gif={MelilloGIF}
              link="http://melillo-equities-dev-builtbykingwilllycom.netlify.com/"
              handleSelect={this.handleSelect}
            />
          </Col>
          <Col span={5}>
            <Thumbnail
              title="Pureworld Hemp"
              image={Pureworld}
              gif={PureworldGIF}
              link="http://blog.pureworldshop.com/"
              handleSelect={this.handleSelect}
            />
          </Col>
          <Col span={2}>
          </Col>
        </Row>
        <Row justify="space-around" align="middle" style={{ marginBottom: 20 }}>
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
