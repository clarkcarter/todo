import React from 'react';
import { List } from 'semantic-ui-react';

class TaskItem extends React.Component {
  render() {
    return (
      <List.Item>
        <List.Content verticalAlign="middle">
          Task Item
        </List.Content>
      </List.Item>
    )
  }
}

export default TaskItem;
