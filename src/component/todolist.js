import React from 'react';
import Todo from './todo';

export default class TodoList extends React.Component {



    render() {
        const todos = this.props.todos.map((todo, index) => {
            return <Todo key = {index} value = {todo.value} onDelete={this.props.ondelete}/>
        }) 

        return <div>{todos}</div>;
    }

}