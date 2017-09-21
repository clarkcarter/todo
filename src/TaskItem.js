import React from 'react';
import TaskDelete from './TaskDelete';
import TaskEdit from './TaskEdit';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    // delete to firebase db
    this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).remove();
  }

  handleEdit() {
    this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).update({task: 'hi'});
  }

  render() {
    return (
      <li>
        {this.props.task}
        <TaskDelete onDelete={this.handleDelete} />
        <TaskEdit onEdit={this.handleEdit}/>
      </li>
    )
  }
}
export default TaskItem;
