({

  onStateChange: function (component, event, helper) {
    var state = event.getParam('value');
    helper.render(component, state);
  },

  stateSelector: function (component, event) {
    var args = event.getParam('arguments');
    var appState = args.appState;
    var callback = args.callback;
    callback({
      todos: appState.todos,
      visibilityFilter: appState.visibilityFilter
    });
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
