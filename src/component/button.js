import React from 'react';

const Button = (props) => {
    return <button onClick={props.onDelete}>{props.buttonLabel}</button>
};

export default Button;