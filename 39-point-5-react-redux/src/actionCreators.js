exports.addToDoItem = (id, name, time, attitude = "snarky") => {
  return {
    type: "ADD_TO_DO_ITEM",
    payload: {
      id,
      name,
      time,
      attitude
    }
  }
}


exports.deleteToDoItem = (id) => {
  return {
    type: "DELETE_TO_DO_ITEM",
    id
  }
}
