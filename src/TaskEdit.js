import React from 'react';

const TaskEdit = (props) => {
  return (
    <button onClick={props.onEdit}>{props.editing === false ? 'edit' : 'done'}</button>
  )
}

export default TaskEdit;
