import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);
const rootElement = document.querySelector('#root');


ReactDOM.render(element, rootElement);
