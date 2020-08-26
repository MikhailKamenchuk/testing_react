import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    }
  }

  handleChange = e => {
    this.setState({
      filterText: e.target.value,
    })
  }

  render() {
    const { filterText } = this.state;
    const usersList = [...this.props.users]
      .filter(({ name }) =>
        name.toLowerCase().includes(filterText.toLowerCase()))
      .map(user => <User key={user.id} {...user} />)
    const count = usersList.length;
    return (
      <div>
        <Filter
          filterText={filterText}
          count={count}
          onChange={this.handleChange} />
        <ul className="users">
          {usersList}
        </ul>
      </div>
    )
  }
}

export default UsersList