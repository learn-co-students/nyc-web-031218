import ToDoStuff from './ToDoStuff'
import { connect } from 'react-redux'
import { addToDoItem, deleteTodoItem } from '../../actionCreators'

const mapStateToProps = (state) => {
  
  console.log("store has updated and state is", state)

  return {
    listaDeQuehaceres: state.todos
  }
}


const mapDispatchToProps = (dispatch) => {

  const newTodo = (todo) => {
    console.log("newTodo in ToDoStuffContainer")
    dispatch({
      type: "ADD_TO_DO_ITEM",
      payload: {
        id: todo.id,
        name: todo.name,
        time: todo.time,
        attitude: todo.attitude
      }
    })
    // dispatch(addToDoItem(5, todo.name, todo.time, todo.snarky))
  }

  const deleteItem = () => {
    dispatch(deleteTodoItem(6))
  }

  return {
    newTodo,
    deleteItem
  }
}

const higherOrderComponent = connect(mapStateToProps, mapDispatchToProps)
const ToDoStuffContainer = higherOrderComponent(ToDoStuff)
export default ToDoStuffContainer


