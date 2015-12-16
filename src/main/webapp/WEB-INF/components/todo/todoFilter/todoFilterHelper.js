({

  onFilterClick: function (type) {
    this.Redux.store.dispatch(
      this.Redux.actionCreator.setVisibilityFilter(type)
    );
  },

  render: function (component, state) {
    component.set('v.visibilityFilter', state);
  }

})
