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

  setColorName = e => {
    const targetColor = e.currentTarget.getAttribute('datacolor');
    this.setState({
      targetColor
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
            onMouseOver={e => this.setColorName(e)}
            onMouseOut={() => this.clearColorName()}
            className="picker__button picker__button_coral"
            datacolor={colors.coral}></button>
          <button
            onMouseOver={e => this.setColorName(e)}
            onMouseOut={() => this.clearColorName()}
            className="picker__button picker__button_aqua"
            datacolor={colors.aqua}></button>
          <button
            onMouseOver={e => this.setColorName(e)}
            onMouseOut={() => this.clearColorName()}
            className="picker__button picker__button_bisque"
            datacolor={colors.bisque}></button>
        </div>
      </div>
    )
  }
}

export default ColorPicker;