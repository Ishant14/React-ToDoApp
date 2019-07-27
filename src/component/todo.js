import React from 'react';

const Todo = (props) => {
    return <div>
        <input type="checkbox"/>
        <label>{props.value}</label>
        <button onClick={props.ondelete}>Delete</button>
    </div>
};

export default Todo;