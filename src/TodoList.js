import React from 'react';
import { List } from 'semantic-ui-react';

const TodoList = (props) => {
  const todos = props.todos.map(todo => (
    <List.Item onClick={() => props.deleteTodo(todo.id)} onMouseOver={() => props.onMouseOver(todo.id)} key={todo.id}>
      <List.Icon name={props.icon} verticalAlign="middle" />
      <List.Content verticalAlign="middle">
        {todo.task}
      </List.Content>
    </List.Item>
  ));

  return <List relaxed selection celled >{todos}</List>;
}

export default TodoList;
