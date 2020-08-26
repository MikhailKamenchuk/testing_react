import React from 'react';

import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        firstName: 'John',
        lastName: 'Doe'
      }
    }
  }
  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value
      }
    })
  }
  render() {
    const {userData} = this.state;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={userData.firstName} />
          <Profile userData={userData} onChange={this.handleChange}/>
        </main>
      </div>
    )

  }
}

export default App