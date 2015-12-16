function actionCreator (actionTypes) { // eslint-disable-line no-unused-vars

  // Can be used to make simple action creators that don't need to close over any internal variables
  function makeActionCreator (type) {
    var propertyNames = Array.prototype.slice.call(arguments, 1);
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var action = { type: type };
      propertyNames.forEach(function (name, index) {
        action[name] = args[index];
      });
      return action;
    };
  }

  var creators = {};

  creators.addTodo = function (text) {
    var nextId = 0;
    return {
      type: actionTypes.ADD_TODO,
      id: nextId++,
      text: text
    };
  };

  // creators.destroyTodo = makeActionCreator(actionTypes.DESTROY_TODO, 'id');
  creators.destroyTodo = function (id) {
    return {
      type: actionTypes.DESTROY_TODO,
      id: id
    };
  };

  // creators.init = makeActionCreator(actionTypes.INIT);
  creators.init = function () {
    return {
      type: actionTypes.INIT
    };
  };

  // creators.setVisibilityFilter = makeActionCreator(actionTypes.SET_VISIBILITY_FILTER, 'filter');
  creators.setVisibilityFilter = function (filter) {
    return {
      type: actionTypes.SET_VISIBILITY_FILTER,
      filter: filter
    };
  };

  // creators.toggleTodo = makeActionCreator(actionTypes.TOGGLE_TODO, 'id');
  creators.toggleTodo = function (id) {
    return {
      type: actionTypes.TOGGLE_TODO,
      id: id
    };
  };

  return creators;
}
