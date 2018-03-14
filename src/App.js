import React from 'react';
import 'antd/dist/antd.css';
import './assets/css/App.css';
import { Route } from 'react-router-dom';

import Portfolio from './containers/Portfolio';

class App extends React.Component {
  state = {
    newKey: new Date()

  };

  render() {
    return (
      <div>
        <Route path="/" component={Portfolio}/>
      </div>
    );
  }
}

export default App;
