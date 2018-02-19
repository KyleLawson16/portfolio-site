import React from 'react';
import 'antd/dist/antd.css';
import './assets/css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Biography from './containers/biography';
import Home from './containers/home';
import Portfolio from './containers/Portfolio';

import Navigation from './components/navigation';

class App extends React.Component {
  state = {
    newKey: new Date()

  };

  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Portfolio />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
