import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    // case 'TEST':
    //   console.log("Testing Multiple Reducers");
    //   return state
    default:
      console.log('hits default')
      return state
  }
}

export default visibilityFilter
