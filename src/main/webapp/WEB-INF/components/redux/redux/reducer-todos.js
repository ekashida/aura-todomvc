function reducerTodos ( // eslint-disable-line no-unused-vars
  actionTypes
) {
  function toggleTodo (state, action) {
    return state.map(function (todo) {
      if (todo.id === action.id) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      }
      return todo;
    });
  }

  function addTodo (state, action) {
    return [{
      completed: false,
      id: action.id,
      text: action.text
    }].concat(state);
  }

  function destroyTodo (state, action) {
    return state.filter(function (todo) {
      return todo.id !== action.id;
    });
  }

  return function (state, action) {
    var nextState = state || [];

    switch (action.type) {
      case actionTypes.ADD_TODO:
        return addTodo(nextState, action);
      case actionTypes.DESTROY_TODO:
        return destroyTodo(nextState, action);
      case actionTypes.TOGGLE_TODO:
        return toggleTodo(nextState, action);
      default:
        return nextState;
    }
  }
}
