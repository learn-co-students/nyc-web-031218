import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'

import { createStore } from 'redux'
import { addToDoItem, deleteToDoItem } from './actionCreators'
import reducer from './reducers/toDoReducer'



const store = createStore(reducer);

store.dispatch(addToDoItem(1, "Walk the Cat", "3am"))
store.dispatch(addToDoItem(2, "Go to the store"))

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));



// console.log(store.getState())
// store.dispatch(deleteToDoItem(1))
// // store.dispatch(deleteToDoItem(2))

// console.log(store.getState())








