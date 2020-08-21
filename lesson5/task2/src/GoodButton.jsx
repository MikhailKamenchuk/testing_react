import React from "react";

class GoodButton extends React.Component {
  alertBtnText = e => alert(e.target.textContent);

  render() {
    return (
      <button
        className="fancy-button"
        onClick={this.alertBtnText}
      >Click</button>
    )
  }
}

export default GoodButton;