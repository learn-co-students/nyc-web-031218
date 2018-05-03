let List = (function(){
  let listId = 0

  return class List {
    // your code here
    constructor(title){
      this.id = ++listId
      this.title = title
      this.tasks = []

      store.lists.push(this)
    }

    render(){
      return `<h2>${this.title}
          <button data-title="${this.title}" class="delete-list">
            X
          </button>
        </h2>
        <ul data-title="${this.title}">
        </ul>`
    }
  }
})()
