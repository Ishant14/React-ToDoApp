import React from 'react';
import './App.css';
import TodoList from './component/todolist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos : [
        {
          value : 'xyz'
        },
        {
          value : 'abc'
        }
      ]
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }


  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
        this.setState( {todos : [...this.state.todos,{value : event.target.value}]}); 
    }
  }

  onDelete = (index) => {
    this.setState(this.state.todos.slice(1, index));
  }

  render() {
    return (
      <div className="App">
        <input type="text" onKeyDown = {this.handleKeyDown}/>
        <TodoList {...this.state} ondelete={this.onDelete} />
      </div>
    )
  }
}

export default App;
