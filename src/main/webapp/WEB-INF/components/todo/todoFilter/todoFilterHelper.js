({

  onFilterClick: function (type) {
    this.Redux.store.dispatch(
      this.Redux.actionCreator.setVisibilityFilter(type)
    );
  },

  setState: function (component, state) {
    component.set('v.activeTodoCount', state.activeTodoCount);
    component.set('v.visibilityFilter', state.visibilityFilter);
  }

})
