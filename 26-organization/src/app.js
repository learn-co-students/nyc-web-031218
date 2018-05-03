function handleNewTask(event){
   event.preventDefault()
   let parentList = event.target.elements[0].value
   let taskDescription = event.target.elements[1].value
   let taskPriority = event.target.elements[2].value

   let list = document.querySelector(`ul[data-title="${parentList}"]`)
   let task = document.createElement('li')
   let newTaskObj = new Task(taskDescription, taskPriority, parentList)
   // debugger

   task.innerHTML = newTaskObj.render()

   // Removes the Task
   task.addEventListener('click', handleRemoveTask)

   // Adding the Task
   list.append(task)

   event.target.reset()
}

function handleRemoveTask(event){
  if(event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-task')){
    event.target.parentNode.remove()
  }
}
