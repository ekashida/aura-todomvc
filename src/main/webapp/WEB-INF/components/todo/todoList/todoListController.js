({

  setState: function (component, event, helper) {
    var state = event.getParam('arguments').state;
    var visibleItems = helper.filterVisibleItems(state.todos, state.visibilityFilter);
    component.set('v.visibleItems', visibleItems);
  },

  todoDestroyHandler: function (component, event, helper) {
    helper.destroyTodo(parseInt(event.target.dataset.todoId, 10));
  },

  todoToggleHandler: function (component, event, helper) {
    helper.toggleTodo(parseInt(event.target.dataset.todoId, 10));
  }

})
