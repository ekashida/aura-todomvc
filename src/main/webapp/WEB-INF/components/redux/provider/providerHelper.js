({

  _isSubscribed: {},

  init: function (component) {
    this.Redux.initialize();
    this._subscribe(component);
  },

  _connect: function () {
    var nextState = this.store.getState();
    var concrete = this.concrete;

    if (concrete.stateSelector) {
      concrete.stateSelector(nextState, function (selectedState) {
        concrete.setState(selectedState);
      });
    } else {
      concrete.setState(nextState);
    }
  },

  _subscribe: function (component) {
    var concrete = component.getConcreteComponent();
    var id = concrete.getGlobalId();
    var isSubscribed = this._isSubscribed[id];

    // We use a flag here because the init event is part of the rendering
    // lifecycle and we only want to subscribe on the first init
    if (!isSubscribed) {
      this._isSubscribed[id] = true;

      this.Redux.store.subscribe(this._connect.bind({
        concrete: concrete,
        store: this.Redux.store
      }));
    }
  }

})
