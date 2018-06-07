import React from 'react'
import ToDoListItemContainer from './containers/ToDoListItemContainer'

const ToDoList = (props) => {

  const todos = props.todos.map((todo) => <li key={ todo.id }><ToDoListItemContainer todo={ todo } /></li>)

  return (<ol>
    { todos }
  </ol>);
} 

export default ToDoList