({

  setState: function (component, event, helper) {
    var state = event.getParam('arguments').state;
    component.set('v.activeTodoCount', state.activeTodoCount);
    component.set('v.visibilityFilter', state.visibilityFilter);
  },

  selectState: function (component, event) {
    var args = event.getParam('arguments');
    var appState = args.appState;
    var callback = args.callback;
    callback({
      activeTodoCount: appState.todos.filter(function (todo) {
        return !todo.completed;
      }).length,
      visibilityFilter: appState.visibilityFilter
    });
  },

  onClick: function (component, event, helper) {
    var type = event.target.dataset.type;
    helper.onFilterClick(type);
  }

})
