import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const setStatusOnline = setStatus.bind(null, 'online');
    const setStatusOffline = setStatus.bind(null, 'offline');

    window.addEventListener('online', setStatusOnline);
    window.addEventListener('offline', setStatusOffline);
    return () => {
      window.removeEventListener('online', setStatusOnline);
      window.removeEventListener('offline', setStatusOffline);
    }
  }, [status]);

  const classes = classNames('status', { 'status_offline': status !== 'online' });
  return <div className={classes}>{status.charAt(0).toUpperCase() + status.slice(1)}</div>
}

export default ConnectionStatus