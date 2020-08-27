import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isVisibleContent, children, title, toggleVisibleContent }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleVisibleContent}>
          {!isVisibleContent
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

Expand.propTypes = {
  isVisibleContent: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  toggleVisibleContent: PropTypes.func.isRequired
}

Expand.defaultProps = {
  title: 'SOME TITLE'
}

export default Expand