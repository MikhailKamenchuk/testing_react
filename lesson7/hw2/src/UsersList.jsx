import React from "react";
import Pagination from './Pagination';
import User from './User'

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 3
    }
  }

  goNextPage = () => this.setState({
    currentPage: this.state.currentPage + 1
  })

  goPrevPage = () => this.setState({
    currentPage: this.state.currentPage - 1
  })

  render() {
    const { currentPage, itemsPerPage } = this.state;
    
    const indexOfLastPost = (currentPage + 1) * itemsPerPage;
    const indexOfFirstPage = indexOfLastPost - itemsPerPage;
    const currentUsers = [...this.props.users].slice(indexOfFirstPage, indexOfLastPost);

    return (
      <div>
        <Pagination
          {...this.state}
          goNext={this.goNextPage}
          goPrev={this.goPrevPage}
          totalItems={this.props.users.length}
        />
        <ul className="users">
          {currentUsers.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    )
  }
}

export default UsersList;