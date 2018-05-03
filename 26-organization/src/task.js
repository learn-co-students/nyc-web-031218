class Task {
  // your code here
  constructor(taskDescription, taskPriority, listName){
    this.taskDescription = taskDescription
    this.taskPriority = taskPriority
    this.listName = listName
  }

  render(){
    return `
    Task: ${this.taskDescription}
    <button data-list-title="${this.listName}" data-task-name="${this.taskDescription}" class="delete-task">
        X
    </button>
    <br>
    Priority: ${this.taskPriority}
  `
  }
}
