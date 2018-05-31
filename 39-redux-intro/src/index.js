import { createStore } from 'redux'
import { addToDoItem, deleteToDoItem } from './actionCreators'
import reducer from './toDoReducer'

const store = createStore(reducer);

console.log(store.getState())

store.dispatch(addToDoItem(1, "Walk the Cat", "3am"))
store.dispatch(addToDoItem(2, "Go to the store"))
store.dispatch(deleteToDoItem(1))
// store.dispatch(deleteToDoItem(2))

console.log(store.getState())








