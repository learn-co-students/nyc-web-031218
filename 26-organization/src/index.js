// List class
// name, Tasks

// Task class
// description, priority, listId
const store = { lists: [], tasks: []}

document.addEventListener('DOMContentLoaded', () => {

  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  // Contains our the HTML for our lists
  const listContainer = document.createElement('div')
  listContainer.setAttribute('id', 'lists')
  const createNewListForm = document.getElementById('create-list-form')

  // Add event listener to List Form
  createNewListForm.addEventListener('submit', handleNewList)

  function handleNewList(event){
    event.preventDefault()

    // If the CreateTaskForm doesn't exist, make
    if(!document.getElementById('create-task-form')){
      const newTaskForm = document.createElement('form')
      newTaskForm.setAttribute('id', 'create-task-form')
      newTaskForm.innerHTML = renderCreateNewTaskForm()

      // Add event listener to Task Form
      newTaskForm.addEventListener('submit', handleNewTask)
      listDiv.append(newTaskForm)
    }


    // Update our Lists for the task form
    const selectList = document.getElementById('parent-list')
    selectList.innerHTML += `<option value='${event.target.elements[0].value}' selected>${event.target.elements[0].value}</option>`

    // Creating the new list for HTML
    const newList = document.createElement('div')
    const newListObj = new List(event.target.elements[0].value)

    newList.innerHTML = newListObj.render()
    newList.addEventListener('click', function(event){
      if(event.target.tagName === "BUTTON" && event.target.classList.contains('delete-list')){
        event.target.parentNode.parentNode.remove()
      }
    })

    listContainer.append(newList)
    listDiv.append(listContainer)
    event.target.reset()
  }

  // function handleNewTask(event){
  //    event.preventDefault()
  //    let parentList = event.target.elements[0].value
  //    let taskDescription = event.target.elements[1].value
  //    let taskPriority = event.target.elements[2].value
  //
  //    let list = document.querySelector(`ul[data-title="${parentList}"]`)
  //    let task = document.createElement('li')
  //    let newTaskObj = new Task(taskDescription, taskPriority, parentList)
  //    // debugger
  //
  //    task.innerHTML = newTaskObj.render()
  //
  //    // Removes the Task
  //    task.addEventListener('click', handleRemoveTask)
  //
  //    // Adding the Task
  //    list.append(task)
  //
  //    event.target.reset()
  // }
  //
  // function handleRemoveTask(event){
  //   if(event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-task')){
  //     event.target.parentNode.remove()
  //   }
  // }

  // Renders out our Create New Task Form
  function renderCreateNewTaskForm(){
    return `<form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>`
  }
});
