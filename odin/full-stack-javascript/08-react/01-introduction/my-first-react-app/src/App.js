import React, { Component } from 'react';

import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import MyComponent from './components/MyComponent';
import CountUp from './components/CountUp';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked");
  }
  
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome /> 
        <MyComponent title='React' someFunction={this.onClickBtn}/>
        <CountUp />
      </div>
    );
  }
}

export default App;
