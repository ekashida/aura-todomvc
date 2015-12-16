({

  onClick: function (component, event, helper) {
    var type = event.target.dataset.type;
    helper.onFilterClick(type);
  },

  onStateChange: function (component, event, helper) {
    var state = event.getParam('value');
    helper.render(component, state);
  },

  stateSelector: function (component, event) {
    var args = event.getParam('arguments');
    var appState = args.appState;
    var callback = args.callback;
    callback({
      visibilityFilter: appState.visibilityFilter
    });
  }

})
