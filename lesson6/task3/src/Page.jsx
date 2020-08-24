import React from "react";
import Message from './Message';

const texts = {
  text1: "Hello, world!",
  text2: 'Another exciting text.',
}

class ColorPicker extends React.Component {
  state = {
    text: ''
  }

  setText = text => {
    this.setState({
      text
    })
  }

  clearText = () => this.setState({
    text: ''
  })

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(texts.text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setText(texts.text2)}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.clearText()}>
            Clear
          </button>
        </div>
      </div>
    )
  }
}

export default ColorPicker;