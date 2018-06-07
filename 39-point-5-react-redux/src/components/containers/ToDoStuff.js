import React from 'react'
import ToDoList from '../ToDoList'
import ToDoForm from '../ToDoForm'

const ToDoStuff = (props) => {

  console.log("todostuff is rendering and lista is ", props.listaDeQuehaceres)
  
    return (<React.Fragment>
      <ToDoForm newTodo={ props.newTodo } />
      <ToDoList deleteItem={ props.deleteItem } todos={ props.listaDeQuehaceres } />
    </React.Fragment>);
} 

export default ToDoStuff

  // state = {
  //   listaDeQuehaceres: [
  //     {
  //       id: 1, 
  //       name: "Pasear el gato",
  //       time: "3am",
  //       attitude: "snarky"
  //     },
  //     {
  //       id: 2, 
  //       name: "Ir a la tienda",
  //       attitude: "snarky"
  //     }
  //   ]
  // }

  // newTodo = (item) => {
  //   this.setState({
  //     listaDeQuehaceres: [ ...this.state.listaDeQuehaceres, item ]
  //   });
  // }

  // deleteItem = (itemId) => {
  //   this.setState({
  //     listaDeQuehaceres: this.state.listaDeQuehaceres.filter((todo) => todo.id !== itemId)
  //   });
  // }


