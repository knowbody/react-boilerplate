import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie } from 'victory';


class App extends Component {
  render() {
    return (
      <VictoryPie />
    );
  }
}

render(<App />, document.getElementById('root'));
