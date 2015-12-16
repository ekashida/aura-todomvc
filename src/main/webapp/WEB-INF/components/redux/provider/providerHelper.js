({

  _isSubscribed: {},

  init: function (component) {
    this.Redux.initialize();
    this._subscribe(component);
  },

  _connect: function () {
    var state = this.Redux.store.getState();
    var concrete = this.concrete;
    if (concrete.stateSelector) {
      concrete.stateSelector(state, function (selectedState) {
        concrete.set('v.state', selectedState);
      });
    } else {
      concrete.set('v.state', state);
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
        Redux: this.Redux
      }));
    }
  }

})
