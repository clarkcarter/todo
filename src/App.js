import React from 'react';
import './App.css'
import TaskCreate from './TaskCreate';
import TaskList from './TaskList';
import { Grid, Header } from 'semantic-ui-react';
import firebase from 'firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBpSRtUdxPUCmau9YtWv8a9HjejRnL7p5E",
      authDomain: "todo-list-27c68b.firebaseapp.com",
      databaseURL: "https://todo-list-27c68b.firebaseio.com",
      projectId: "todo-list-27c68b",
      storageBucket: "",
      messagingSenderId: "316482775429"
    };
    firebase.initializeApp(config);
  }



  render() {
    return (
      <div className='todo-app'>
        <Grid verticalAlign='middle' centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Header as='h1' textAlign='center'>Todo List</Header>
              <TaskCreate db={firebase}/>
              <TaskList db={firebase}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;
