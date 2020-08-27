import React from 'react';

class OddNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 0
      ? false
      : true
  }

  render() {
    const { title, number } = this.props
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    )
  }
}

export default OddNumbers