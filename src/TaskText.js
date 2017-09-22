import React from 'react';

class TaskText extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.task}
      </div>
    )
  }
}

export default TaskText;
