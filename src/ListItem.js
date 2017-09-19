import React from 'react';
import './ListItem.css'
import { List } from 'semantic-ui-react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      hovered: true
    });
  }

  handleMouseOut() {
    this.setState({
      hovered: false
    });
  }

  render() {
    return (
      <List.Item className={ this.state.hovered ? 'list-item-hovered' : ''} onClick={() => this.props.deleteTodo(this.props.todo.id)} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <List.Icon name={ this.state.hovered ? 'check circle outline' : 'circle outline' } verticalAlign="middle" />
        <List.Content verticalAlign="middle">
          {this.props.todo.task}
        </List.Content>
      </List.Item>
    )
  }
}

export default ListItem;
