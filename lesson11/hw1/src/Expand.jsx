import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Expand = ({ isVisibleContent, children, title, toggleVisibleContent }) => (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleVisibleContent}>
          {
            !isVisibleContent
              ? <FontAwesomeIcon icon={faChevronDown} />
              : <FontAwesomeIcon icon={faChevronUp} />
          }
        </button>
      </div>
      <div className="expand__content">
        {isVisibleContent ? children : null}
      </div>
    </div>
  )

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