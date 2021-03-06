({

  destroyTodo: function (id) {
    this.Redux.store.dispatch(
      this.Redux.actionCreator.destroyTodo(id)
    );
  },

  filterVisibleItems: function (todoList, visibilityFilter) {
    if (visibilityFilter === 'COMPLETED') {
      return todoList.filter(function (todoItem) {
        return todoItem.completed;
      });
    } else if (visibilityFilter === 'ACTIVE') {
      return todoList.filter(function (todoItem) {
        return !todoItem.completed;
      });
    } else {
      // return all by default
      return [].concat(todoList);
    }
  },

  toggleTodo: function (id) {
    this.Redux.store.dispatch(
      this.Redux.actionCreator.toggleTodo(id)
    );
  }

})
