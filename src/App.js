import React from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      task: this.state.input
    };
    this.setState((prevState) => ({
      todos: prevState.todos.concat(newTodo),
      input: ''
    }));
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div>
        <CreateTodo onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
