({

  init: function (component, event, helper) {
    helper.setVisibleItems(component, helper);
  },

  todoDestroyHandler: function (component, event, helper) {
    var id = parseInt(event.target.dataset.todoId, 10);
    helper.destroyTodo(component, id);
  },

  todoToggleHandler: function (component, event, helper) {
    var id = parseInt(event.target.dataset.todoId, 10);
    helper.toggleTodo(component, id);
  }

})
