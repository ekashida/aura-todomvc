({

  onFilterClick: function (type) {
    this.Redux.store.dispatch(
      this.Redux.actionCreator.setVisibilityFilter(type)
    );
  }

})
