import React from "react";

const NumbersList = ({ numbers }) => {
  const listElems = numbers.map(num => <li>{num}</li>)
  return (
    <ul>
      {listElems}
    </ul>
  )
}

export default NumbersList;