import React, { Component } from 'react';

class BubbleBackground extends Component {
  render() {
    return (
      <div className="bubble-background">
        <div className="bubble-box" style={{width: 200, height: 200, top: '15%', left: '60%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-counter 20s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 400, height: 400, top: '30%', left: '60%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-clock 10s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 100, height: 100, top: '15%', left: '55%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-counter 15s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 220, height: 220, top: '20%', left: '75%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-clock 25s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 200, height: 200, top: '40%', left: '12%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-clock 25s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 270, height: 270, top: '32%', left: '25%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-counter 22s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 350, height: 350, top: '7%', left: '35%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-clock 29s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 170, height: 170, top: '52%', left: '42%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-counter 13s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 70, height: 70, top: '55%', left: '38%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-counter 20s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 240, height: 240, top: '46%', left: '24%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-clock 18s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 410, height: 410, top: '18%', left: '7%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-clock 12s infinite'}}>
          </div>
        </div>
        <div className="bubble-box" style={{width: 280, height: 280, top: '26%', left: '59%'}}>
          <div className="bubble" style={{animation: 'grow-shrink-counter 23s infinite'}}>
          </div>
        </div>
      </div>

    )
  }
}

export default BubbleBackground;
