import React from 'react';

const TodoList = (props) => {
  const todos = props.todos.map(todo => (
    <li key={todo.id}>
      {todo.task}
      <button onClick={() => props.deleteTodo(todo.id)}>delete</button>
    </li>
  ));

  return <ul>{todos}</ul>;
}

export default TodoList;
