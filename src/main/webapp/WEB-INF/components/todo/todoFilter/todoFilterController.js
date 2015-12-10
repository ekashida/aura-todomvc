({
  handleFilterClick: function (component, event, helper) {
    component.set('v.visibilityFilter', event.target.dataset.filterType);
  }
})
