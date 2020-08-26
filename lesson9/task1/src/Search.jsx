import React from 'react';

class Search extends React.Component {
  state = {
    value: ''
  }

  handleChange = e => this.setState({
    value: e.target.value
  })

  handleSubmit = e => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`)
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input value={this.state.value} type="text" className="search__input" onChange={this.handleChange} />
        <button className="search__button">Search</button>
      </form>
    )
  }
}

export default Search