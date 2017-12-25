import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';

import SocialIcons from './social_icons';
const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Navigation extends Component {
  state = {
    collapsed: true,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="bio">
              <Link to="/biography">
                <Icon type="user" />
                <span>Biography</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="solution" />
              <span>Education</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="desktop" /><span>Technology</span></span>}
            >
              <Menu.Item key="3">Tech Skills</Menu.Item>
              <Menu.Item key="4">Portfolio</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Social</span></span>}
            >
              <Menu.Item key="6">
                <SocialIcons
                  url="https://github.com/KyleLawson16"
                  width={25}
                  height={25}
                  marginRight={10}
                  color="rgba(255, 255, 255, 0.65)"
                  hovColor="white"
                />
                <SocialIcons
                  url="https://www.linkedin.com/in/kylejlawson/"
                  width={25}
                  height={25}
                  marginRight={10}
                  color="rgba(255, 255, 255, 0.65)"
                  hovColor="white"
                />
                <SocialIcons
                  url="https://twitter.com/KyleLaws0n"
                  width={25}
                  height={25}
                  marginRight={10}
                  color="rgba(255, 255, 255, 0.65)"
                  hovColor="white"
                />
                <SocialIcons
                  url="https://medium.com/@kylelawson"
                  width={25}
                  height={25}
                  marginRight={0}
                  color="rgba(255, 255, 255, 0.65)"
                  hovColor="white"
                />

              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="global" />
              <span>Travel</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default Navigation;
