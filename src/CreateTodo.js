import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const CreateTodo = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input id="todo-input" fluid action='ADD' onChange={props.onChange} autofocus></Input>
    </Form>
  )
}

export default CreateTodo;
