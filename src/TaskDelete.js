import React from 'react';

const TaskDelete = (props) => {
  return (
    <div>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default TaskDelete;
