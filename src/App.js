import React, { Component } from 'react';
import Windows from './components/Windows';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="application">
        <div className="stage">
          <Windows />
        </div>
        <div className="control-panel">
          CP
        </div>
      </div>
    );
  }
}

export default App;
