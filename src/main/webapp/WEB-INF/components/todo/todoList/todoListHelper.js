({

  render: function (component, state) {
    var visibleItems = this.filterVisibleItems(state.todos, state.visibilityFilter);
    component.set('v.visibleItems', visibleItems);
  },

  destroyTodo: function (component, id) {
    var updatedTodoItems = component.get('v.todoItems')
      .filter(function (todoItem) {
        return todoItem.id !== id;
      });
    component.set('v.todoItems', updatedTodoItems);
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
