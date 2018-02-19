import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import Background from "../assets/images/background.png";

import Jumbotron from '../components/Jumbotron';

class Portfolio extends Component {
  render() {
    return (
      <Layout
        style={{
          minHeight: '100vh',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundImage: `url(${Background})`
        }}
      >
        <Jumbotron />
      </Layout>
    )
  }
}

export default Portfolio;
