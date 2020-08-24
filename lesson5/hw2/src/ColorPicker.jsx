import React from "react";

const colors = {
  coral: "Coral",
  aqua: 'Aqua',
  bisque: 'Bisque',
}

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetColor: ''
    }
  }

  setColorName = color => {
    this.setState({
      targetColor: color
    })
  }

  clearColorName = () => this.setState({
    targetColor: ''
  })

  render() {
    return (
      <div>
        <div className="picker__title">
          {this.state.targetColor}
        </div>
        <div>
          <button
            onMouseOver={() => this.setColorName(colors.coral)}
            onMouseOut={() => this.clearColorName()}
            className="picker__button picker__button_coral"></button>
          <button
            onMouseOver={() => this.setColorName(colors.aqua)}
            onMouseOut={() => this.clearColorName()}
            className="picker__button picker__button_aqua"></button>
          <button
            onMouseOver={() => this.setColorName(colors.bisque)}
            onMouseOut={() => this.clearColorName()}
            className="picker__button picker__button_bisque"></button>
        </div>
      </div>
    )
  }
}

export default ColorPicker;