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
    const filteredList = [...this.props.users].filter(user =>
      (user.name.toLowerCase()).includes(filterText.toLowerCase()));
    const usersList = !filteredList ? this.props.users : filteredList
    const count = usersList.length;
    return (
      <div>
        <Filter filterText={filterText} count={count} onChange={this.handleChange} />
        <ul className="users">
          {usersList.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    )
  }
}

export default UsersList