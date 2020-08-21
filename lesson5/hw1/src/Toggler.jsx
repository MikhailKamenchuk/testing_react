import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglerValue: 'Off'
    }
  }
  setNewTogglerValue = e => {
    const newTogglerValue = this.state.togglerValue === 'Off'
      ? 'On'
      : 'Off';
    this.setState({
      togglerValue: newTogglerValue
    })
  }

  render() {
    return (
      <button
        className="toggler"
        onClick={() => this.setNewTogglerValue()}
      >
        {this.state.togglerValue}
      </button>
    )
  }
}

export default Toggler;