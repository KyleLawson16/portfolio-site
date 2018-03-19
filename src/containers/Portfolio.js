import React, { Component } from 'react';
import { Layout, Row, Col, Button, Modal, Icon } from 'antd';
import windowSize from 'react-window-size';
import _ from 'lodash';

import Background from "../assets/images/background.png";
import ProjectBoard from '../assets/images/board-2.png';
import Name from '../assets/images/name.png';

import Thumbnail from '../components/Thumbnail';
import SocialIcons from '../components/social_icons';
import Screen from '../components/screen';

import data from '../data';

const ButtonGroup = Button.Group;

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProject: data.projects[0],
      visible: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextProject = this.nextProject.bind(this);
    this.previousProject = this.previousProject.bind(this);
  }

  renderThumbnails() {
    return _.map(data.projects, project => {
      let active;
      if (project.index === this.state.activeProject.index) {
        active = true;
      }
      return (
        <Thumbnail
          index={project.index}
          title={project.title}
          src={project.src}
          imageSrc={project.imageSrc}
          active={active}
          handleSelect={this.handleSelect}
        />
      )
    })
  }

  renderSocialIcons() {
    return _.map(data.icons, icon => {
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

  handleSelect(index) {
    this.setState({
      activeProject: data.projects[index],
    });
  }

  openModal() {
    this.setState({ visible: true });
  }
  closeModal() {
    this.setState({ visible: false });
  }

  nextProject() {
    var index = this.state.activeProject.index + 1;
    if (index > data.projects.length - 1) {
      index = 0;
    }
    this.setState({ activeProject: data.projects[index] });
  }
  previousProject() {
    var index = this.state.activeProject.index - 1;
    if (index < 0) {
      index = data.projects.length - 1;
    }
    this.setState({ activeProject: data.projects[index] });
  }


  render() {
    return (
      <div>
        <div className="name__container">
          <img
            className="name__img"
            src={Name}
            alt="KyleLawson"
          />
        </div>

        <Layout className="body__container">
          <div className="project-board__container">
            <img
              src={ProjectBoard}
              className="project-board__img"
              alt="project-board"
            />
            <div className="project-board__text">
              <h1 className="thumbnail__title thumbnail__project-header">My Projects</h1>
              {this.renderThumbnails()}
              <h1 className="thumbnail__title thumbnail__click-me">"click me"</h1>
            </div>
          </div>
          <div>
            <img
              src={Background}
              className="desk-photo"
              alt="desk"
            />
            <button
              className="btn__learn-more"
              style={{
                top: (0.173 * this.props.windowHeight) + (.25 * this.props.windowWidth),
              }}
              onClick={this.openModal}
              >Learn More
            </button>
            <ButtonGroup
              className="btn-group__arrows"
              style={{
                top: (0.173 * this.props.windowHeight) + (.25 * this.props.windowWidth),
              }}
            >
              <Button className="btn__arrow" onClick={this.previousProject}>
                <Icon type="left" />
              </Button>
              <Button className="btn__arrow" onClick={this.nextProject}>
                <Icon type="right" />
              </Button>
            </ButtonGroup>
          </div>
          <Screen
            src={this.state.activeProject.src}
            imageSrc={this.state.activeProject.imageSrc}
          />

          <Row justify="space-around" align="middle" className="footer__row">
            <Col span={24} className="footer__col">
              {this.renderSocialIcons()}
            </Col>
          </Row>
          <Modal
            visible={this.state.visible}
            footer={false}
            maskClosable={true}
            closable={false}
          >
            <div onClick={this.closeModal} className="modal__close__container">
              <div className="modal__close">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   viewBox="0 0 25 25" className="modal__close__svg">
                <path d="M13.2,12.5L24.4,1.2c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L12.5,11.8L1.2,0.5C1,0.4,0.7,0.4,0.5,0.5S0.4,1,0.5,1.2
                  l11.3,11.3L0.5,23.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l11.3-11.3l11.3,11.3c0.1,0.1,0.2,0.1,0.3,0.1
                  s0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L13.2,12.5z"/>
                </svg>
              </div>
            </div>
            <h1 className="modal__title">{this.state.activeProject.title}</h1>
            <img src={this.state.activeProject.imageSrc} className="modal__photo" alt="Modal"/>
            <div className="modal__content">
              <p>{this.state.activeProject.modal.content}</p>
            </div>
          </Modal>
        </Layout>
      </div>
    )
  }
}

export default windowSize(Portfolio);
