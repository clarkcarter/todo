import React from 'react';

class TaskItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.task}
      </div>
    )
  }
}

export default TaskItem;
