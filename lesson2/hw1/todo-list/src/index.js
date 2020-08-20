import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';

const list = (
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input type="text" className="task-input" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
  </>
)

ReactDOM.render(
  list,
  document.getElementById('root')
);

