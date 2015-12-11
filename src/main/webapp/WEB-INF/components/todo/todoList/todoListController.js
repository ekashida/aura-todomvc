({

  init: function (component, event, helper) {
    helper.setVisibleItems(component, helper);
  },

  todoToggleHandler: function (component, event, helper) {
    var id = parseInt(event.target.dataset.todoId);
    helper.toggleCompletedState(component, id);

    // updateActiveTodoCount is an action that can be executed by invoking run()
    component.get('v.updateActiveTodoCount').run()
  }

})
