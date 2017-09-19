import React from 'react';
import ListItem from './ListItem';
import { List } from 'semantic-ui-react';

const TodoList = (props) => {
  const todos = props.todos.map(todo => (
      <ListItem deleteTodo={props.deleteTodo} todo={todo} key={todo.id}/>
  ));

  return <List relaxed celled >{todos}</List>;
}

export default TodoList;
