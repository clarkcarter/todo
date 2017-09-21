import React from 'react';
import TaskDelete from './TaskDelete';
import TaskEdit from './TaskEdit';
import TaskText from './TaskText';
import InputEditItem from './InputEditItem';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      editing: false,
      input: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStartEdit = this.handleStartEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleFinishEdit = this.handleFinishEdit.bind(this);
    this.displayTaskOrEditing = this.displayTaskOrEditing.bind(this);
  }

  handleDelete() {
    // delete to firebase db
    this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).remove();
  }

  handleStartEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.value === e.target.defaultValue) {
      this.setState({
        input: e.target.defaultValue
      });
    } else {
      this.setState({
        input: e.target.value
      });
    }
  }

  handleEnter(e) {
    if(e.keyCode === 13 && this.state.input === '') {
      this.handleDelete();
    } else if (e.keyCode === 13 && this.state.input !== '') {
      e.preventDefault();
      // add to firebase db
      this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).update({task: this.state.input});
      this.setState({
        input: '',
        editing: !this.state.editing
      });
    }
  }

  handleFinishEdit(e) {
    if(this.state.input === '') {
      this.handleDelete();
    } else if (this.state.input !== ''){
      e.preventDefault();
      // add to firebase db
      this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).update({task: this.state.input});
      this.setState({
        input: '',
        editing: !this.state.editing
      });
    }
  }

  displayTaskOrEditing() {
    if (this.state.editing) {
      return <InputEditItem text={this.props.task} onChange={this.handleChange} onKeyUp={this.handleEnter}/>;
    } else {
      return <TaskText onClick={this.handleStartEdit} task={this.props.task}/>;
    }
  }

  render() {
    return (
      <li>
      {this.displayTaskOrEditing()}
      <TaskDelete onDelete={this.handleDelete} />
      <TaskEdit onEdit={this.state.editing ? this.handleFinishEdit : this.handleStartEdit} editing={this.state.editing}/>
      </li>
    )
  }
}
export default TaskItem;
