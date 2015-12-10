({

  getNewTodoItem: function (component) {
    var formEl = component.getElement();
    var inputEl = formEl.getElementsByClassName('new-todo')[0];
    if (inputEl) {
      var todoItem = inputEl.value;
      inputEl.value = '';
      return todoItem;
    }
  },

  handleSubmit: function (component) {
    var todoItem = this.getNewTodoItem(component);
    todoItem = todoItem.trim();

    if (todoItem) {
      var todoItems = component.get('v.todoItems') || [];
      todoItems.unshift(this.createTodo(todoItem));
      component.set('v.todoItems', todoItems);
    }
  },

  createTodo: function (text) {
    return {
      id: this._todoId++,
      text: text,
      completed: false
    };
  },

  _todoId: 0

})
