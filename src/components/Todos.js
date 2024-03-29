import React from "react";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from "../actions/todos";
import List from "./List";

class Todos extends React.Component {
  /**
   * addItem
   */
  addItem = e => {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };

  /**
   * removeItem
   * @param {objet} todo
   */
  removeItem = todo => {
    // All fetch logic moved to an action creator
    this.props.dispatch(handleDeleteTodo(todo));
  };

  /**
   * toggleItem
   */
  toggleItem = id => {
    this.props.dispatch(handleToggle(id));
  };

  /**
   * render
   **/
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);
