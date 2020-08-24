import React from "react";
import User from './User'

class UsersList extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        sorting: null
      }
  }

  toggleSorting = () => {
    const newSorting = this.state.sorting === "asc"
      ? "desc"
      : "asc"
    this.setState({
      sorting: newSorting
    })
  }

  render() {
    let newUserList;
    !this.state.sorting
      ? newUserList = this.props.users
      : newUserList = [...this.props.users].sort((a, b) =>
        this.state.sorting === 'asc'
          ? a.age - b.age
          : b.age - a.age
      )

    return (
      <div>
        <button onClick={this.toggleSorting} className="btn">{this.state.sorting || '-'}</button>
        <ul className="users">
          {newUserList.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    )
  }
}

export default UsersList;