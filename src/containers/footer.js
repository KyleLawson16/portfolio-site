import React, { Component } from 'react';
import { Layout } from 'antd';

import SocialIcons from '../components/social_icons';

class Footer extends Component {
  render() {
    return (
      <Layout>
        <SocialIcons 
          url="https://github.com/KyleLawson16"
          width={50}
          height={50}
          color="#fff"
          hovColor="#000" />
      </Layout>
    )
  }
}

export default Footer;
