import React from "react";
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedIn: false,
      loading: false
    }
  }

  handleLogin = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => this.setState({
      loading: false,
      isloggedIn: true
    }), 2000)

  }

  handleLogout = () => {
    this.setState({
      isloggedIn: false
    })
  }

  render() {
    if(this.state.loading){
      return (
        <Spinner size={33} />
      )
    }
    return (
      <>
        {!this.state.isloggedIn
          ? <Login onLogin={this.handleLogin} />
          : <Logout onLogout={this.handleLogout} />}
      </>
    )
  }
}

export default Auth;