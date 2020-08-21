import React from "react";
import moment from "moment";
import './profile.scss';

const formatDate = date => moment(date).format('DD MMM YY');

const Profile = props => {
  const {firstName, lastName, birthDate, birthPlace} = props.userData;

  return (
    <div className="profile">
      <p className="profile__name">{`${firstName} ${lastName}`}</p>
      <p className="profile__birth">{`Was born ${formatDate(birthDate)} in ${birthPlace}`}</p>
    </div>
  );
}

export default Profile;