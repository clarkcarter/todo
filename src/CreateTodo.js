import React from 'react';

const CreateTodo = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input onChange={props.onChange}></input> 
      <button type="submit">add</button>
    </form>
  )
}

export default CreateTodo;
