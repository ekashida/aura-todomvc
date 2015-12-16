function reducer ( // eslint-disable-line no-unused-vars
  actionTypes,
  appReducer,
  todosReducer
) {
  return function (state, action) {
    var nextState = state || {};

    switch (action.type) {
      case actionTypes.ADD_TODO:
      case actionTypes.DESTROY_TODO:
      case actionTypes.TOGGLE_TODO:
        return Object.assign({}, nextState, {
          todos: todosReducer(nextState.todos, action)
        });
      case actionTypes.SET_VISIBILITY_FILTER:
        return Object.assign({}, nextState, appReducer(nextState, action));
      default:
        return nextState;
    }
  }
}
