import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
           <Sidebar></Sidebar>
        </div>
      </div>
    );
  }
}

export default App;
