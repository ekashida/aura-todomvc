({

  onStateChange: function (component, event, helper) {
    var state = event.getParam('value');
    helper.setState(component, state);
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
    helper.destroyTodo(parseInt(event.target.dataset.todoId, 10));
  },

  todoToggleHandler: function (component, event, helper) {
    helper.toggleTodo(parseInt(event.target.dataset.todoId, 10));
  }

})
