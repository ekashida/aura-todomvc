function actionCreator (actionTypes) { // eslint-disable-line no-unused-vars
  var creators = {
    init: function () {
      return { type: actionTypes.INIT };
    }
  };

  creators.addTodo = function (text) {
    var nextId = 0;
    return {
      type: actionTypes.ADD_TODO,
      id: nextId++,
      text: text
    };
  };

  creators.destroyTodo = function (id) {
    return {
      type: actionTypes.DESTROY_TODO,
      id: id
    };
  };

  creators.setVisibilityFilter = function (filter) {
    return {
      type: actionTypes.SET_VISIBILITY_FILTER,
      filter: filter
    };
  };

  creators.toggleTodo = function (id) {
    return {
      type: actionTypes.TOGGLE_TODO,
      id: id
    };
  };

  return creators;
}
