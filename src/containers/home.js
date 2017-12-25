import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import BubbleBackground from '../components/bubble_background';

class Home extends Component {
  render() {
    return (
      <Layout className="home-background">
      <div className="home-background-2">
      </div>
        <BubbleBackground />
        <Row>
          <Col span={8}>
            <Link to="/biography">
              <div className="hover-box">
                <h3>Biography</h3>
              </div>
            </Link>
          </Col>
          <Col span={8}>
            <div className="hover-box">
              <h3>Education</h3>
            </div>
          </Col>
          <Col span={8}>
            <div className="hover-box">
              <h3>Tech Skills</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div className="hover-box">
              <h3>Portfolio</h3>
            </div>
          </Col>
          <Col span={8}>
            <div className="hover-box">
              <h3>Social</h3>
            </div>
          </Col>
          <Col span={8}>
            <div className="hover-box">
              <h3>Travel</h3>
            </div>
          </Col>
        </Row>
        <h1 className="heading-large">KYLE LAWSON</h1>
      </Layout>
    )
  }
}

export default Home;
