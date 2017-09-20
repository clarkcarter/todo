import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const CreateTodo = (props) => {
  return (
    <div>
      <Form onSubmit={props.onSubmit}>
        <Input id="todo-input" fluid action='ADD' onChange={props.onChange} autoFocus autoComplete='off'></Input>
      </Form>
    </div>
  )
}

export default CreateTodo;
