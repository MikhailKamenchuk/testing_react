import React from "react";

class Toggler extends React.Component {
  setNewTogglerValue = e => {
    const currentTextContent = e.target.textContent;
    currentTextContent === 'Off'
    ? e.target.textContent = 'On'
    : e.target.textContent = 'Off'
  }

  render() {
    return (
        <button 
          className="toggler"
          onClick={e => this.setNewTogglerValue(e)}
        >Off</button>
    )
  }
}

export default Toggler;