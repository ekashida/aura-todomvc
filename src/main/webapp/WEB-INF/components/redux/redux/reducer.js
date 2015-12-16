function reducer (actionTypes) { // eslint-disable-line no-unused-vars

  // TODO: Put these reducers into different files

  function toggleTodo (state, action) {
    var nextState = state || [];
    return nextState.map(function (todo) {
      if (todo.id === action.id) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      }
      return todo;
    });
  }

  function addTodo (state, action) {
    var nextState = state || [];
    return [{
      completed: false,
      id: action.id,
      text: action.text
    }].concat(nextState);
  }

  function destroyTodo (state, action) {
    var nextState = state || [];
    return nextState.filter(function (todo) {
      return todo.id !== action.id;
    });
  }

  return function (state, action) {
    var nextState = state || {};

    switch (action.type) {
      case actionTypes.ADD_TODO:
        return Object.assign({}, nextState, {
          todos: addTodo(nextState.todos, action)
        });
      case actionTypes.DESTROY_TODO:
        return Object.assign({}, nextState, {
          todos: destroyTodo(nextState.todos, action)
        });
      case actionTypes.SET_VISIBILITY_FILTER:
        return Object.assign({}, nextState, {
          visibilityFilter: action.filter
        });
      case actionTypes.TOGGLE_TODO:
        return Object.assign({}, nextState, {
          todos: toggleTodo(nextState.todos, action)
        });
      default:
        return nextState;
    }
  }
}
