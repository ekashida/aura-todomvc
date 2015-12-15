function reducer (actionTypes) {
  var nextTodoId = 0;

  return function (state, action) {
    var nextState = state || { todos: [] };
    
    switch (action.type) {
      case actionTypes.ADD_TODO:
        return Object.assign({}, nextState, {
          todos: [{
            completed: false,
            id: nextTodoId++,
            text: action.text
          }].concat(nextState.todos)
        })
      default:
        return nextState;
    }
  }
}
