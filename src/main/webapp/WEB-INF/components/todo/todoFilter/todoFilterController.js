({
  handleAllFilter: function (component) {
    component.set('v.visibilityFilter', 'ALL');
  },
  handleActiveFilter: function (component) {
    component.set('v.visibilityFilter', 'ACTIVE');
  },
  handleCompletedFilter: function (component) {
    component.set('v.visibilityFilter', 'COMPLETED');
  }
})
