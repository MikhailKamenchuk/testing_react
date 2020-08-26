import React from 'react';

const UserForm = ({ userData, onChange }) => {
  const { firstName, lastName } = userData;
  return (
    <form className="user-form">
      <input type="text" name="firstName" className="user-form__input" value={firstName} onChange={onChange} />
      <input type="text" name="lastName" className="user-form__input" value={lastName} onChange={onChange}/>
    </form>
  )
}
export default UserForm;