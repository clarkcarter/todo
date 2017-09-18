import React from 'react';
import './App.css'
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import { Grid, Header } from 'semantic-ui-react';

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
    if ( this.state.input !== '' ) {
      e.preventDefault();
      const newTodo = {
        id: Date.now(),
        task: this.state.input
      };
      this.setState((prevState) => ({
        todos: prevState.todos.concat(newTodo),
        input: ''
      }));
      document.getElementById('todo-input').value='';
    } else {
      alert("You can't add a blank task.");
    }
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className='todo-app'>
        <Grid verticalAlign='middle' centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header as='h1' textAlign='center'>Todo List</Header>
              <CreateTodo onChange={this.handleChange} onSubmit={this.handleSubmit}/>
              <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;
