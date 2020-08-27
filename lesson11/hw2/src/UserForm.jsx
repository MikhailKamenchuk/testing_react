import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      student: '',
      occupation: '',
      about: '',
    }
  }

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: newValue
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  render() {
    const { name, student, occupation, about } = this.state;
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name} 
            onChange={this.handleChange}/>
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">Student</label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={student} 
            onChange={this.handleChange}/>
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
          <select
            name="occupation"
            className="form-input"
            value={occupation}
            onChange={this.handleChange}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">About</label>
          <textarea
            name="about"
            className="form-input"
            value={about}
            onChange={this.handleChange} />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    )
  }
}

export default UserForm