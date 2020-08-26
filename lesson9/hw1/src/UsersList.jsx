import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      count: null,
      filteredList: null
    }
  }

  handleChange = e => {
    const filteredList = [...this.props.users].filter(user =>
      (user.name.toLowerCase()).includes(e.target.value.toLowerCase()))

    this.setState({
      filterText: e.target.value,
      filteredList,
      count: filteredList.length
    })
  }

  render() {
    const { filterText, count, filteredList } = this.state;
    const usersList = !filteredList ? this.props.users : filteredList

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