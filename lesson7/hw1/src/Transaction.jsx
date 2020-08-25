import React from "react";
import moment from 'moment';

const formatDate = time => moment(time).format("DD MMM");
const formatTime = time => moment(time).format("HH:mm");

const Transaction = ({ from, to, amount, rate, time }) => {

  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amount}</span>
    </li>
  )
}

export default Transaction;