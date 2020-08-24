import React from 'react';

const Message = ({ text }) => !text
  ? null
  : <div className="message">
    {text}
  </div>;

export default Message