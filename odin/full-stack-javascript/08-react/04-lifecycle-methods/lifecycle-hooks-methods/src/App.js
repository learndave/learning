// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import Counter from './Counter';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      propToIgnore: 0,
      seed: 100,
    }

    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});

    this.propToIgnore = () => this.setState({propToIgnore: Math.random()});
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)});
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mount} className="element">Mount</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount} className="element">Unmount</button>
        <button className="element" onClick={this.propToIgnore}>Update Prop To Ignore</button>
        <button className="element" onClick={this.seedGenerator}>Generate Seed</button>
        
        {this.state.mount ?
          <Counter
            propToIgnore={this.state.propToIgnore}
            seed={this.state.seed}
        /> : null}
      </div>
    );
  }
}

export default App;
