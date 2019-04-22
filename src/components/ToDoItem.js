import React from 'react';

function ToDoItem(props) {
  return (
      <div className='todo-item'>
        <input type="checkbox" checked={props.completed}/>
        <h1 style={{color: props.completed ? 'black' : 'red'}}>{props.text}</h1>
      </div>
    )
}

export default ToDoItem