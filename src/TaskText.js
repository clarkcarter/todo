import React from 'react';

class TaskText extends React.Component {
  render() {
    return (
      <span onClick={this.props.onClick}>
        {this.props.task}
      </span>
    )
  }
}

export default TaskText;
