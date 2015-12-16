function reducer (actionTypes) { // eslint-disable-line no-unused-vars
  var nextTodoId = 0;

  function toggleTodo (state, action) {
    if (state.id === action.id) {
      return Object.assign({}, state, {
        completed: !state.completed
      });
    }
    return state;
  }

  return function (state, action) {
    var nextState = state;

    switch (action.type) {
      case actionTypes.INIT:
        return {
          todos: [],
          visibilityFilter: 'ALL'
        };
      case actionTypes.ADD_TODO:
        return Object.assign({}, nextState, {
          todos: [{
            completed: false,
            id: nextTodoId++,
            text: action.text
          }].concat(nextState.todos)
        })
      case actionTypes.SET_VISIBILITY_FILTER:
        return Object.assign({}, nextState, {
          visibilityFilter: action.filter
        })
      case actionTypes.TOGGLE_TODO:
        return Object.assign({}, nextState, {
          todos: nextState.todos.map(function (todo) {
            return toggleTodo(todo, action);
          })
        });
      default:
        return nextState;
    }
  }
}
