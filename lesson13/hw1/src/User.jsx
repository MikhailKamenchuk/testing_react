import React from 'react';

class User extends React.PureComponent {
  state = {
    userData: null
  }

  componentDidMount() {
    const { userId } = this.props.match.params
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(userData => this.setState({ userData }))
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