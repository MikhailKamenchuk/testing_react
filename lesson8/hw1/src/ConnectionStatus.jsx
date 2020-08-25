import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online'
  }

  componentDidMount() {
    window.addEventListener('online', this.toggleStatus);
    window.addEventListener('offline', this.toggleStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.toggleStatus);
    window.removeEventListener('offline', this.toggleStatus);
  }

  toggleStatus = () => {
    const newStatus = this.state.status === 'online' ? 'offline' : 'online';
    this.setState({
      status: newStatus
    })
  }

  render() {
    const {status} = this.state;
    const classNames = status !== 'online' ? "status status_offline" : "status";
    return <div className={classNames}>{status.charAt(0).toUpperCase() + status.slice(1)}</div>
  }
}

export default ConnectionStatus