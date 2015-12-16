function actionCreator (actionTypes) {
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

  creators.setVisibilityFilter = function (filter) {
    return {
      type: actionTypes.SET_VISIBILITY_FILTER,
      filter: filter
    };
  };

  return creators;
}
