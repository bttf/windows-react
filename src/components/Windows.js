import React, { Component } from 'react';
import Window from './Window';
import './Windows.scss';

export default class Windows extends Component {
  state = {
    isMoving: false,
    windows: [{
      index: 25,
      placement: 0,
    }, {
      index: 0,
      placement: 1,
    }, {
      index: 1,
      placement: 2,
    }, {
      index: 2,
      placement: 3,
    },{
      index: 3,
      placement: 4,
    }, {
      index: 4,
      placement: 5,
    }],
    content: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
  }

  constructor(props) {
    super(props);

    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft() {
    if (this.state.isMoving) return;
    const newWindows = this.state.windows.map(win => {
      let newIndex = win.index;
      let newPlacement = (win.placement + 1) % this.state.windows.length;

      if (win.placement === this.state.windows.length - 1) {
        const firstWindow = this.state.windows.filter(win => win.placement === 0)[0];
        newIndex = firstWindow.index - 1;

        if (newIndex < 0) {
          newIndex = this.state.content.length - 1;
        }
      }

      return {
        index: newIndex,
        placement: newPlacement,
      };
    });

    this.setState({ windows: newWindows, isMoving: true });
    setTimeout(() => this.setState({ isMoving: false }), 500);
  }

  moveRight() {
    if (this.state.isMoving) return;
    const newWindows = this.state.windows.map(win => {
      let newIndex = win.index;
      let newPlacement = (win.placement - 1);

      if (newPlacement < 0) {
        newPlacement = this.state.windows.length - 1;
      }

      if (win.placement === 0) {
        const lastWindow = this.state.windows
          .filter(win => win.placement === this.state.windows.length - 1)[0];
        newIndex = (lastWindow.index + 1) % this.state.content.length;
      }

      return {
        index: newIndex,
        placement: newPlacement,
      };
    });
    this.setState({ windows: newWindows, isMoving: true });
    setTimeout(() => this.setState({ isMoving: false }), 500);
  }

  render() {
    return [(
      <div className="windows">
        {this.state.windows.map((win, index) => (
          <Window key={index} index={win.placement}>
            <img src={`/photo-${index}.gif`} />
          </Window>
        ))}
      </div>
    ), (
      <div className="arrows">
        <div className="left" onClick={this.moveLeft}>left</div>
        <div className="right" onClick={this.moveRight}>right</div>
      </div>
    )]
  }
}
