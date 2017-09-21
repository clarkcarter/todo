import React from 'react';
import TaskDelete from './TaskDelete';
import TaskEdit from './TaskEdit';
import InputEditItem from './InputEditItem';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      editing: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.displayTaskOrEditing = this.displayTaskOrEditing.bind(this);
  }

  handleDelete() {
    // delete to firebase db
    this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).remove();
  }

  handleEdit() {
    // this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).update({task: 'hi'});
    this.setState({
      editing: !this.state.editing
    });
  }

  displayTaskOrEditing() {
    if (this.state.editing) {
      return <li>
              <InputEditItem text={this.props.task}/>
              <TaskDelete onDelete={this.handleDelete} />
              <TaskEdit onEdit={this.handleEdit}/>
            </li>;
    } else {
      return <li>
              {this.props.task}
              <TaskDelete onDelete={this.handleDelete} />
              <TaskEdit editing={this.state.editing} onEdit={this.handleEdit}/>
            </li>;
    }
  }

  render() {
    return this.displayTaskOrEditing();
  }
}
export default TaskItem;
