({

  init: function (component) {
    // Initialize Redux (i.e., create the redux store) once, the first time a
    // component extending the redux provider is initialized
    // TODO: Find a better place to put this...
    this.Redux.initialize();

    // This check exists because when a component extends another component,
    // the init event of the super is fired more than once...
    if (!component.unsubscribe) {
      this.subscribe(component);
    }
  },

  subscribe: function (component) {
    var store = this.Redux.store;
    var concrete = component.getConcreteComponent();

    concrete.unsubscribe = store.subscribe(function () {
      if (concrete.selectState) {
        concrete.selectState(store.getState(), function (selectedState) {
          concrete.setState(selectedState);
        });
      } else {
        concrete.setState(store.getState());
      }
    }.bind(this));
  }

})
