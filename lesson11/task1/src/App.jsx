import React from 'react';

import Numbers from './Numbers';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';

class App extends React.Component {
  state = {
    number: 0
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.setState({
      number: this.state.number + 1
    }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <div className="app">
        <Numbers title="All numbers" number={this.state.number} />
        <EvenNumbers title="All numbers" number={this.state.number} />
        <OddNumbers title="All numbers" number={this.state.number} />
      </div>
    )
  }
}

export default App