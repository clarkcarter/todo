import React from 'react';

const TaskDelete = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Delete</button>
    </div>
  )
}

export default TaskDelete;
