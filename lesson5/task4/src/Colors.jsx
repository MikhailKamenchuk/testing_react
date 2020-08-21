import React from "react";

const colors = {
  RED: '#f00',
  GREEN: '#0f0',
  BLUE: '#00f',
}

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  setBGColor = color => {
    document.body.style.backgroundColor = color
  }

  render() {
    return (
      <div className="colors">
        <button 
          style={{
            backgroundColor: colors.RED
          }}
          className="colors__button"
          onClick={() => this.setBGColor(colors.RED)}
        />
        <button 
          style={{
            backgroundColor: colors.GREEN
          }}
          className="colors__button"
          onClick={() => this.setBGColor(colors.GREEN)}
        />
        <button 
          style={{
            backgroundColor: colors.BLUE
          }}
          className="colors__button"
          onClick={() => this.setBGColor(colors.BLUE)}
        />
      </div>
    )
  }
}

export default Colors;