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
  }

  return creators;
}
