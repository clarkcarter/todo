import React from 'react';
import _ from 'lodash';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    //defines a listener that keeps an eye of the database of tasks and when a new task is added to the database, it calls the getTasks function with the database of tasks as it's argument
    const taskList = this.props.db.database().ref('tasks');
    taskList.on('value', snapshot => {
      this.getTasks(snapshot.val());
    });
  }

  getTasks(value) {
    let taskVal = value;
    let tasks = _(taskVal).keys()
    .map(taskKey => {
        let cloned = _.clone(taskVal[taskKey]);
        cloned.key = taskKey;
        return cloned;
    }).value();
    this.setState({
      tasks: tasks
    });
  }

  render() {
    const tasks = this.state.tasks.map((task) => {
      return (
        <TaskItem task={task.task} key={task.key}/>
      )
    });
    return (
      <ul>
        {tasks}
      </ul>
    )
  }
}

export default TaskList;
