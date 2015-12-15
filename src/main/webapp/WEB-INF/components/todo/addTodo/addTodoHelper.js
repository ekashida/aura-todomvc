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
    var store = this.Redux.store;
    var addTodo = this.Redux.actionCreator.addTodo;
    var todoText = this.getNewTodoItem(component);

    if (todoText.trim()) {
      store.dispatch(
        addTodo(todoText.trim())
      );
    }
  },

})
