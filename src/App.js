import React from 'react';
import './App.css';
import TodoList from './component/todolist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos : [
        {
          value : 'xyz',
          id : 1564203759564,
          completed : false

        },
        {
          value : 'abc',
          id : 1564203759565,
          completed : false
        }
      ]
    }
  
  }


  onToggleTodo = (id) => {
    const updatedTodos  = this.state.todos.map((todo) => {
        if (id === todo) {
           return {
             ...todo,
             completed : !todo.completed
           }; 
        }
        return todo;
    })

    this.setState({
      todos : updatedTodos
    })
  }


  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
        const todoItem = {
          value : event.target.value,
          id : Date.now(),
          completed : 0
        }
        this.setState( {todos : [...this.state.todos, todoItem]}); 
    }
  }

  onDelete = (id) => {
    const updatedTodos = this.state.todos.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
    });

    this.setState({todos : updatedTodos});
  }


  render() {
    return (
      <div className="App">
        <input type="text" onKeyDown = {this.handleKeyDown}/>
        <TodoList {...this.state} onDelete={this.onDelete} onToggleTodo= {this.onToggleTodo}/>
      </div>
    )
  }
}

export default App;
