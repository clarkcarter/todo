import React from 'react';
import TaskDelete from './TaskDelete';
import TaskText from './TaskText';
import InputEditItem from './InputEditItem';
import { List } from 'semantic-ui-react';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      editing: false,
      input: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStartEdit = this.handleStartEdit.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
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
    if (!this.state.editing) {
     // attach/remove event handler
     document.addEventListener('click', this.handleOutsideClick);
   } else {
     document.removeEventListener('click', this.handleOutsideClick);
   }
   this.setState(prevState => ({
       editing: !prevState.editing
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    } else if (this.state.input !== '') {
      this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).update({task: this.state.input});
      this.setState({
        input: '',
        editing: !this.state.editing
      });
      document.removeEventListener('click', this.handleOutsideClick);
    } else if (this.state.input === '') {
      this.handleDelete();
      document.removeEventListener('click', this.handleOutsideClick);
    }
  }

  handleChange(e) {
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
      document.removeEventListener('click', this.handleOutsideClick);
    } else if (e.keyCode === 13 && this.state.input !== '') {
      e.preventDefault();
      // add to firebase db
      this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).update({task: this.state.input});
      this.setState({
        input: '',
        editing: !this.state.editing
      });
      document.removeEventListener('click', this.handleOutsideClick);
    }
  }

  handleFinishEdit(e) {
    if(this.state.input === '') {
      this.handleDelete();
      document.removeEventListener('click', this.handleOutsideClick);
    } else if (this.state.input !== ''){
      e.preventDefault();
      // add to firebase db
      this.props.db.database().ref('/tasks/' + this.props.uniqueIdentifyer).update({task: this.state.input});
      this.setState(prevState => ({
        input: '',
        editing: !prevState.editing
      }));
    }
  }

  displayTaskOrEditing() {
    if (this.state.editing) {
      return <InputEditItem inputRef={node => { this.node = node; }} text={this.props.task} onChange={this.handleChange} onKeyUp={this.handleEnter}/>;
    } else {
      return <TaskText onClick={this.handleStartEdit} task={this.props.task}/>;
    }
  }

  render() {
    return (
      <List.Item>
        <List.Content floated="left" style={{lineHeight: '2.2em'}}>
          {this.displayTaskOrEditing()}
        </List.Content>
        <List.Content floated='right'>
          <TaskDelete onDelete={this.handleDelete} />
        </List.Content>
      </List.Item>
    )
  }
}
export default TaskItem;
