import React, { Component } from 'react';
import windowSize from 'react-window-size';
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';

class Screen extends Component {
  render() {
    return (
      <div>
        <BrowserView device={isBrowser}>
          <div className="jumbotron">
            {this.props.windowWidth > 1000
            ?
            <iframe
              style={{
                position: 'absolute',
                width: (0.539 * this.props.windowWidth) * 1 / .55,
                left: (0.082 * this.props.windowWidth),
                top: (0.198 * this.props.windowHeight) + (this.props.windowWidth / 55),
                height: (0.539 * this.props.windowWidth) * 0.585 * 1 / .55
              }}
              className="frame"
              src={this.props.src}
              frameBorder="0"
              title="large-computer-screen">
            </iframe>
            :
            <iframe
              style={{
                position: 'absolute',
                width: (0.72 * this.props.windowWidth) * 1 / .38,
                left: (0.146 * this.props.windowWidth),
                top: (0.183 * this.props.windowHeight) + ((this.props.windowWidth + 700 - this.props.windowWidth) / 30) + (.47 * this.props.windowWidth),
                height: (0.359 * this.props.windowWidth) * 1.17 * 1 / .38
              }}
              className="frame"
              src={this.props.src}
              frameBorder="0"
              title="small-computer-screen">
            </iframe>
            }
          </div>
        </BrowserView>
        <MobileView device={isMobile}>
          <div style={{
            position: 'absolute',
            width: '72vw',
            left: '14.6vw',
            top: '21.3vh',
            marginTop: '47.2vw',
            height: '41.34vw'
          }}>
            <img
              style={{
                width: '100%',
                height: '100%',
              }}
              src={this.props.imageSrc}
              alt="mobile-computer-screen" />
          </div>
        </MobileView>
      </div>
    )
  }
}

export default windowSize(Screen);
