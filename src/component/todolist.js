import React from 'react';
import Todo from './todo';

export default class TodoList extends React.Component {

    render() {
        const todos = this.props.todos.map((todo) => {
            return <Todo key = {todo.id} value = {todo.value} 
            onToggleTodo= {()=>this.props.onToggleTodo(todo.id)}
            buttonLabel = {'Delete'} onDelete={() => this.props.onDelete(todo.id)}/>
        }) 

        return <div>{todos}</div>;
    }

}