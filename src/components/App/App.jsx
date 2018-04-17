import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMessage: 'Welcome To React Custom!',
    };
  }
  render() {
    const { welcomeMessage } = this.state;
    return (
      <div>
        <h1>{ welcomeMessage }</h1>
      </div>
    );
  }
}

export default hot(module)(App);
