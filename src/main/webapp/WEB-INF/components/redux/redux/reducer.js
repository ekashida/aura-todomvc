function reducer ( // eslint-disable-line no-unused-vars
  actionTypes,
  todos
) {
  return function (state, action) {
    var nextState = state || {};

    switch (action.type) {
      case actionTypes.ADD_TODO:
      case actionTypes.DESTROY_TODO:
      case actionTypes.TOGGLE_TODO:
        return Object.assign({}, nextState, {
          todos: todos(nextState.todos, action)
        });
      case actionTypes.SET_VISIBILITY_FILTER:
        return Object.assign({}, nextState, {
          visibilityFilter: action.filter
        });
      default:
        return nextState;
    }
  }
}
