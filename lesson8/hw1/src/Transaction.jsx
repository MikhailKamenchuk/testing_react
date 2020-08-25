import React from "react";
import moment from 'moment';

const formatDate = time => moment(time).format("DD MMM");
const formatTime = time => moment(time).format("HH:mm");
const formatNumbers = new Intl.NumberFormat("en-GB")

const Transaction = ({ from, to, amount, rate, time }) => {

  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{formatNumbers.format(rate)}</span>
      <span className="transaction__amount">{formatNumbers.format(amount)}</span>
    </li>
  )
}

export default Transaction;