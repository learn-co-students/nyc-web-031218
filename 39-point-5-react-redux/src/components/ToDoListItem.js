import React from 'react'


const ToDoListItem = (props) => {
  return (<React.Fragment>
    <h4 onClick={ (e) => props.deleteTodo(props.todo.id) }>{ props.todo.name }</h4>
    <span>{ props.todo.time }</span> <span>({ props.todo.attitude })</span>
  </React.Fragment>);
} 

export default ToDoListItem

