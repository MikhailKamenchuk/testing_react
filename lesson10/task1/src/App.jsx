import React from 'react';

import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then(res => res.json())
      .then(data => this.setState({
        user: data
      }))
  }

  render() {
    return (
      <div className='page'>
        <header className="header">
          <UserMenu userData={this.state.user}/>
        </header>
        <UserProfile userData={this.state.user} />
      </div>
    )
  }

}

export default App