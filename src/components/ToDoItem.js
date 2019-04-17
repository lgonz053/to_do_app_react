import React from 'react';

function ToDoItem(props) {
  return (
      <div className='todo-item'>
        <input type="checkbox"/>
        <h1>{props.text}</h1>
        <h2>{props.completed}</h2>
      </div>
    )
}

export default ToDoItem