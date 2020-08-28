import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput'
import {
  fetchTasksList,
  createTask,
  updateTask,
  deleteTask
} from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.fetchTasks()
  }

  fetchTasks = () => fetchTasksList().then(tasks => {
    this.setState({ tasks })
  })

  handleAddTodo = text => {
    const newTask = {
      text,
      done: false
    };
    createTask(newTask).then(() => this.fetchTasks())
  }

  handleStatusTaskChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done
    }
    updateTask(id, updatedTask).then(() => this.fetchTasks())
  }

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks())
  }

  render() {
    const { tasks } = this.state;
    const updatedTasks = tasks
      .slice()
      .sort((a, b) => a.done - b.done)
    return (
      <main className="todo-list">
        <CreateTaskInput
          handleAddTodo={this.handleAddTodo}
        />
        <ul className="list">
          {updatedTasks.map(task =>
            <Task
              key={task.id}
              onStatusChange={this.handleStatusTaskChange}
              onDelete={this.handleTaskDelete}
              {...task} />)}
        </ul>
      </ main>
    )
  }
}

export default TasksList