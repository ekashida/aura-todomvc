function createStore (actionCreator) { // eslint-disable-line no-unused-vars
  return function (reducer) {
    var state;
    var listeners = [];

    function dispatch (action) {
      state = reducer(state, action);
      listeners.forEach(function (listener) {
        listener();
      });
    }

    function subscribe (listener) {
      listeners.push(listener);
      return function unsubscribe () {
        listeners = listeners.filter(function (l) {
          if (l !== listener) {
            return l;
          }
        });
      };
    }

    function getState () {
      return state;
    }

    dispatch(actionCreator.init())

    return {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState
    };
  }
}
