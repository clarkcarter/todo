import React from 'react';
import { Form, Input } from 'semantic-ui-react';

class TaskCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    if ( this.state.input !== '' ) {
      e.preventDefault();
      // add to firebase db
      let taskArr = this.props.db.database().ref('/tasks');
      taskArr.push({
        task: this.state.input
      });
      this.setState({
        input: ''
      });
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input fluid action='ADD' onChange={this.handleChange} autoFocus autoComplete='off' value={this.state.input}></Input>
        </Form>
      </div>
    )
  }
}

export default TaskCreate;
