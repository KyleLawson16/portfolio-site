import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import windowSize from 'react-window-size';


import Background from "../assets/images/background.png";
import Vidvision from '../assets/images/vidvision.png';
import Melillo from '../assets/images/melillo.png';
import Pureworld from '../assets/images/pureworld.png';

import Jumbotron from '../components/Jumbotron';
import Thumbnail from '../components/Thumbnail';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = { jumbotronImage: Vidvision };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(title, image) {
    this.setState({ jumbotronImage: image });
  }

  render() {
    return (
      <div>
      <div style={{ width: '100%', height: (0.15 * this.props.windowHeight)}}></div>
      <Layout
        style={{
          minHeight: '100vh',
          backgroundColor: 'white',
        }}
      >
        <div>
          <img src={Background} style={{ width: '100%', position: 'relative' }} />
        </div>

        <Jumbotron
          top={(0.15 * this.props.windowHeight) + (this.props.windowWidth / 50) }
          left={(0.3085 * this.props.windowWidth)}
          width={(0.359 * this.props.windowWidth)}
          image={this.state.jumbotronImage}
        />


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
              handleSelect={this.handleSelect}
            />
          </Col>
          <Col span={5}>
            <Thumbnail
              title="Melillo Equities"
              image={Melillo}
              handleSelect={this.handleSelect}
            />
          </Col>
          <Col span={5}>
            <Thumbnail
              title="Pureworld Hemp"
              image={Pureworld}
              handleSelect={this.handleSelect}
            />
          </Col>
          <Col span={2}>
          </Col>
        </Row>

      </Layout>
      </div>
    )
  }
}

export default windowSize(Portfolio);
