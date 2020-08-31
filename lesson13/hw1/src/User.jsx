import React from 'react';

class User extends React.PureComponent {
  state = {
    userData: null
  }

  fetchUserData = userId => fetch(`https://api.github.com/users/${userId}`)
  .then(res => res.json())
  .then(userData => this.setState({ userData }))

  componentDidMount() {
    const { userId } = this.props.match.params;
    this.fetchUserData(userId)    
  }

  componentDidUpdate(prevProps) {
    const { userId } = this.props.match.params;
    if (userId !== prevProps.match.params.userId) {
      this.fetchUserData(userId);
    }
  }

  render() {
    if (!this.state.userData) return null;
    
    const { avatar_url, name, location } = this.state.userData;
    
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    )
  }


}

export default User