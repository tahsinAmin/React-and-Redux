
import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy sope milk'},
      {id: 2, content: 'play mario cart'},
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id != id;
    });
    this.setState({
      todos // when the state name and the const name is same, we can just write it lke this.
    });
    
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue -text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
  
}

export default App;
