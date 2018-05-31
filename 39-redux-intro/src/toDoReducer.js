
const reducer = (state = { todos: [] }, action) => {

  console.log("state", state)
  console.log("action", action)


  switch(action.type) {
    case "ADD_TO_DO_ITEM" :
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