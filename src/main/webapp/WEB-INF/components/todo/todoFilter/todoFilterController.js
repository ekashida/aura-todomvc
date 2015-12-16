({

  onClick: function (component, event, helper) {
    var type = event.target.dataset.type;
    helper.onFilterClick(type);
  },

  onStateChange: function (component, event, helper) {
    var state = event.getParam('value');
    helper.setState(component, state);
  },

  stateSelector: function (component, event) {
    var args = event.getParam('arguments');
    var appState = args.appState;
    var callback = args.callback;
    callback({
      activeTodoCount: appState.todos.filter(function (todo) {
        return !todo.completed;
      }).length,
      visibilityFilter: appState.visibilityFilter
    });
  }

})
