import React from 'react';

import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then(res => res.json())
      .then(data => this.setState({
        userData: data
      }))
  }

  render() {
    return (
      <div className='page'>
        <header className="header">
          <UserMenu userData={this.state.userData}/>
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    )
  }

}

export default App