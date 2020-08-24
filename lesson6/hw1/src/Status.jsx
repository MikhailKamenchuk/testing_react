import React from "react";
import Online from './Online';
import Offline from './Offline';

const Status = ({ isOnline }) =>
  <div className="status">
    {!isOnline
      ? <Offline />
      : <Online />}
  </div>

export default Status;