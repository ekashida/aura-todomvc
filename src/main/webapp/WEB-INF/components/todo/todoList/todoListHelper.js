({

  render: function (component, state) {
    var visibleItems = this.filterVisibleItems(state, component.get('v.visibilityFilter'));
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

  setVisibleItems: function (component) {
    var visibleItems = this.filterVisibleItems(
      component.get('v.todoItems'),
      component.get('v.visibilityFilter')
    );
    component.set('v.visibleItems', visibleItems);
  },

  toggleTodo: function (component, id) {
    var updatedTodoItems = component.get('v.todoItems')
      .map(function (todoItem) {
        if (todoItem.id === id) {
          todoItem.completed = !todoItem.completed;
        }
        return todoItem;
      });
    component.set('v.todoItems', updatedTodoItems);
  }

})
