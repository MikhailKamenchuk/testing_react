import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const Expand = ({ isVisibleContent, children, title, toggleVisibleContent }) => {
  return (
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
}

export default Expand