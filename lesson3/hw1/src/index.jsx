import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Greeting from './Greeting.jsx';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVK7xUD2P-8Dqt-CDb1JLDHzE_2yAns-AttA&usqp=CAU'
}

ReactDOM.render(
  <Greeting 
    firstName={'John'}
    lastName={'Doe'}
    birthDate={new Date('2001-01-01T11:11:11.819Z')}
  />,
  document.getElementById('root')
);

