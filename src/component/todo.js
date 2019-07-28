import React from 'react';
import Button from './button';

const Todo = (props) => {
    return <div>
        <input type="checkbox"/>
        <label>{props.value}</label>
        <Button buttonLabel= {props.buttonLabel} onDelete={props.onDelete}/>
    </div>
};

export default Todo;