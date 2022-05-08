import React, { Component } from "react";

import './assets/css/style.css'

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Body from "./components/body/Body";

class App extends Component {
  


  render() {
    return (
      <div className="App">
        {/* <Header />
        <Sidebar /> */}
        <Body/>
      </div>
    );
  }
}

export default App;
