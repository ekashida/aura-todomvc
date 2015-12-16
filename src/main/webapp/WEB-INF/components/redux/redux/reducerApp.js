function reducerApp ( // eslint-disable-line no-unused-vars
  actionTypes
) {
  function visibilityFilter (state, action) {
    var nextState = state || 'ALL';
    switch (action.type) {
      case actionTypes.SET_VISIBILITY_FILTER:
        return action.filter;
      default:
        return nextState;
    }
  }

  return function (state, action) {
    var nextState = state || {};
    switch (action.type) {
      case actionTypes.SET_VISIBILITY_FILTER:
        return Object.assign({}, nextState, {
          visibilityFilter: visibilityFilter(nextState.visibilityFilter, action)
        });
      default:
        return nextState;
    }
  }
}
