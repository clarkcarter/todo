import React from 'react';
import { Button } from 'semantic-ui-react';

const TaskDelete = (props) => {
  return (
      <Button onClick={props.onDelete}>Delete</Button>
  )
}

export default TaskDelete;
