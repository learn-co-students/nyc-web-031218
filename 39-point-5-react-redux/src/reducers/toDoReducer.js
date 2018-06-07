
const reducer = (state = { todos: [] }, action) => {

  console.log("reducer (this is state)", state)
  console.log("reducer (this is action)", action)

  switch(action.type) {
    case "ADD_TO_DO_ITEM" :
      console.log("hello from inside the switch case")
      return {
        todos: [ ...state.todos, action.payload ]
      }
    case "DELETE_TO_DO_ITEM" :
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id)
      }
    default :
      return state
    }
}

export default reducer