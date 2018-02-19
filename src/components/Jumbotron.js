import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Vidvision from '../assets/images/vidvision.png';

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <img
          src={Vidvision}
          style={{ width: '35.8vw', marginLeft: '30.9%', marginTop: 18 }}
        />
      </div>
    )
  }
}

export default Jumbotron;
