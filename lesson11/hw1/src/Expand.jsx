import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.PureComponent {
  state = {
    isVisibleContent: false
  }

  toggleVisibleContent = () => this.setState({
    isVisibleContent: !this.state.isVisibleContent
  })

  render() {
    const { children, title } = this.props;
    const { isVisibleContent } = this.state;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleVisibleContent}>
            {isVisibleContent
              ? <i className="fas fa-chevron-up" />
              : <i className="fas fa-chevron-down" />}
          </button>
        </div>
        <div className="expand__content">
          {isVisibleContent ? children : null}
        </div>
      </div>
    )
  }
}

Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
}

Expand.defaultProps = {
  title: 'SOME TITLE'
}

export default Expand