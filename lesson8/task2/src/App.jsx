import React from 'react';

import Clock from './Clock';

class App extends React.Component {
  state = {
    visible: true
  }

  toggleVisible = () => this.setState({
    visible: !this.state.visible
  })
  render() {
    console.log(this.state.visible)
    return (
      <>
        <button className="btn" onClick={this.toggleVisible}>Hide Clocks</button>
        {this.state.visible && <>
          <Clock location={'New York'} offset={-5} />
          <Clock location={'Kyiv'} offset={2} />
          <Clock location={'London'} offset={0} />
        </>}
      </>
    )
  }
}

export default App