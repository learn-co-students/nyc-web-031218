import ToDoListItem from '../ToDoListItem'
import { connect } from 'react-redux'
import { deleteToDoItem } from '../../actionCreators'



const mapDispatchToProps = (dispatch) => {

 return {
  deleteTodo: (id) => dispatch(deleteToDoItem(id))
 }
}

export default connect(null, mapDispatchToProps)(ToDoListItem)

