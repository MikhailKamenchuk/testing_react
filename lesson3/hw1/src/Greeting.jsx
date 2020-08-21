import React from "react";
import moment from "moment";

const Greeting = props => {
  const {firstName, lastName, birthDate} = props;
  const age = moment(new Date()).diff(moment(birthDate), 'years');
  return (
    <div className="greeting">
      {`My name is ${firstName} ${lastName}. I'm ${age} years old`}
    </div>
  );
}

export default Greeting;