import React from 'react';
import TaskDelete from './TaskDelete';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      deleted: true
    });
  }

  render() {
    return (
      <li style={{display: this.state.deleted && 'none'}}>
        {this.props.task}
        <TaskDelete onClick={this.handleClick} />
      </li>
    )
  }
}
export default TaskItem;
