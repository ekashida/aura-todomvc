({

  getNewTodoItem: function (component) {
    var formEl = component.getElement();
    var inputEl = formEl.getElementsByClassName('new-todo')[0];
    if (inputEl) {
      var todoText = inputEl.value;
      inputEl.value = '';
      return todoText;
    }
  },

  handleSubmit: function (component) {
    var todoText = this.getNewTodoItem(component);
    todoText = todoText.trim();

    if (todoText) {
      var todoItems = component.get('v.todoItems') || [];
      todoItems.unshift(this.createTodo(todoText));
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
