import React from 'react';
import { List, Icon } from 'semantic-ui-react';

const TodoList = (props) => {
  const todos = props.todos.map(todo => (
    <List.Item key={todo.id}>
       <List.Content verticalAlign='middle' floated='right'>
        <Icon onClick={() => props.deleteTodo(todo.id)} circular name='trash outline' />
      </List.Content>
      <List.Content verticalAlign='middle'>
        {todo.task}
      </List.Content>
    </List.Item>
  ));

  return <List celled >{todos}</List>;
}

export default TodoList;
