import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online'
  }

  componentDidMount() {
    window.addEventListener('online', this.setStatusOnline);
    window.addEventListener('offline', this.setStatusOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setStatusOnline);
    window.removeEventListener('offline', this.setStatusOffline);
  }

  setStatusOnline = () => {
    this.setState({
      status: 'online'
    })
  }
  setStatusOffline = () => {
    this.setState({
      status: 'offline'
    })
  }

  render() {
    const {status} = this.state;
    const classNames = status !== 'online' ? "status status_offline" : "status";
    return <div className={classNames}>{status}</div>
  }
}

export default ConnectionStatus