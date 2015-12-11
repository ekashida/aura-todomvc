({

  init: function (component, event, helper) {
    helper.setVisibleItems(component, helper);
  },

  todoToggleHandler: function (component, event, helper) {
    var id = parseInt(event.target.dataset.todoId);
    helper.toggleTodo(component, id);

    // parentTodoToggleHandler is an action that can be executed by invoking run()
    component.get('v.parentTodoToggleHandler').run()
  }

})
