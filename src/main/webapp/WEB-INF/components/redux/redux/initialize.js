/* This is kind of ugly but Aura doesn't allow sharing between components and this is a step above hanging the store off the global object */
function initialize (createStore, reducers) {
  var initialized;
  return function () {
    if (!initialized) {
      initialized = true;
      // TODO: Investigate if there's a better place than helper.Redux.store to keep the store reference
      this.store = createStore(reducers);
    }
  };
}
