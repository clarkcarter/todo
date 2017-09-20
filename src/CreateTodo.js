import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const CreateTodo = (props) => {
  return (
    <div>
      <Form onSubmit={props.onSubmit}>
        <Input id="todo-input" fluid action='ADD' onChange={props.onChange} autoFocus></Input>
      </Form>
    </div>
  )
}

export default CreateTodo;
